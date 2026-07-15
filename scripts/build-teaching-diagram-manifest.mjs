/**
 * Builds scripts/teaching-diagram-manifest.json from content/exercises/manual/*.ts
 * Run: node scripts/build-teaching-diagram-manifest.mjs
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const MUSCLE_LABELS = {
  "transversus-abdominis": "deep lower abdomen and transverse abdominis band",
  multifidus: "small deep muscles along the lower spine",
  abdominals: "rectus abdominis on the front abdominal wall",
  obliques: "obliques along the side waist",
  "hip-flexors": "hip flexors at the front of the hip",
  quadriceps: "quadriceps on the front of the thighs",
  adductors: "adductors on the inner thighs",
  glutes: "gluteals on the buttock and outer hip",
  hamstrings: "hamstrings on the back of the thighs",
  calves: "calves on the lower legs",
  "spinal-erectors": "erector spinae along the back",
  lats: "latissimus dorsi on the mid back",
  deltoids: "deltoids on the shoulders",
  triceps: "triceps on the back of the upper arms",
  biceps: "biceps on the front of the upper arms",
  pecs: "pectorals on the chest",
  "shoulder-stabilizers": "shoulder and scapular stabilizers around the shoulder blade"
};

const STYLE =
  "Clean instructional exercise diagram in the style of classic fitness manual line art, on a plain white background. " +
  "A simple outlined human figure drawn in thin black line art (minimal detail, smooth contour outline, no face details) " +
  "on a thin black-outlined exercise mat. Selected muscle groups highlighted inside the body with smooth magenta-pink shading " +
  "like vintage muscle-activation diagrams; all other regions plain white with black outline. " +
  "No text, no labels, no letters anywhere. Flat print-like illustration, crisp thin black lines.";

function grab(src, re) {
  const m = src.match(re);
  return m ? m[1] : "";
}

function grabArray(src, re) {
  const m = src.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

function poseFor(name, bodyPosition, category, slug) {
  const n = name.toLowerCase();

  if (bodyPosition === "Supine") {
    if (n.includes("bridge") || n.includes("pelvic curl"))
      return "lying on back, knees bent, hips lifted in a bridge with feet grounded on the mat, side profile view";
    if (n.includes("hundred"))
      return "lying on back, head and shoulders lifted, knees in tabletop, arms reaching long beside the hips, side profile";
    if (n.includes("roll up") || n.includes("roll-up"))
      return "supine rolling up through the spine toward seated, side profile mid-roll";
    if (n.includes("roll like a ball") || n.includes("rocker"))
      return "supine curled into a compact ball shape with knees pulled in, side profile";
    if (n.includes("chest lift"))
      return "supine with knees bent, head and shoulders curling up off the mat, side profile";
    if (n.includes("criss cross") || n.includes("leg stretch") || n.includes("straight leg"))
      return "supine curled up, legs extended or cycling in the air, side profile";
    if (n.includes("toe tap") || n.includes("tabletop"))
      return "supine, knees in tabletop, one foot lowering toward the mat, side profile";
    if (n.includes("breathing") || n.includes("pelvic tilt") || n.includes("neutral pelvis"))
      return "supine relaxed, knees bent feet flat, ribs soft, side profile";
    return "supine on mat, knees bent feet flat, side profile view";
  }

  if (bodyPosition === "Side-Facing") {
    if (n.includes("beat"))
      return "side-lying in one long line, head propped on bottom arm, both legs extended and slightly lifted, small motion arcs at ankles suggesting leg beats, side profile";
    if (n.includes("circle"))
      return "side-lying, top leg drawing a small circle in the air, side profile";
    if (n.includes("kick") || n.includes("lift") || n.includes("lower"))
      return "side-lying, top leg lifted in open chain hip work, pelvis stacked, side profile";
    if (n.includes("rainbow"))
      return "side-lying, top leg sweeping in a large arc overhead like a rainbow, side profile";
    if (n.includes("side bend") || n.includes("star") || n.includes("plank variation"))
      return "side-lying or side support with body lifted off mat in lateral flexion, side profile";
    if (n.includes("bicycle") || n.includes("developp"))
      return "side-lying, top leg moving through controlled hip patterns, side profile";
    return "side-lying long line on mat, pelvis stacked, bottom arm supporting head, side profile";
  }

  if (bodyPosition === "Side-Facing Seated") {
    return "seated side-facing mermaid position, legs folded to one side, one arm reaching overhead in side bend, three-quarter view";
  }

  if (bodyPosition === "Quadruped / Kneeling") {
    if (n.includes("bird dog"))
      return "quadruped tabletop, opposite arm and leg reaching long, side profile";
    if (n.includes("cat cow"))
      return "quadruped, spine in gentle cat flexion, side profile";
    if (n.includes("donkey") || n.includes("hydrant") || n.includes("kick"))
      return "quadruped, one leg lifting behind or to the side, side profile";
    if (n.includes("rotation") || n.includes("side bend"))
      return "kneeling upright, trunk rotating or side bending, side profile";
    if (n.includes("plank prep"))
      return "kneeling plank prep with hands under shoulders, side profile";
    return "hands and knees quadruped tabletop, neutral spine, side profile";
  }

  if (bodyPosition === "Prone / Extension") {
    if (n.includes("swimming"))
      return "prone, opposite arm and leg lifted in swimming pattern, side profile";
    if (n.includes("swan"))
      return "prone, upper chest and head lifting in extension supported on hands or forearms, side profile";
    if (n.includes("kick"))
      return "prone, knees bent kicking heels toward glutes, side profile";
    if (n.includes("dart") || n.includes("arm lift"))
      return "prone, chest slightly lifted, arms reaching long, side profile";
    return "prone on mat, gentle spinal extension lift, side profile";
  }

  if (bodyPosition === "Plank / Closed Chain") {
    if (n.includes("shoulder tap") || n.includes("mountain"))
      return "full plank on hands, one hand or knee moving, side profile";
    if (n.includes("leg lift"))
      return "plank position, one leg lifting behind, side profile";
    if (n.includes("knee"))
      return "modified plank on knees and hands, long line from knees to head, side profile";
    if (n.includes("forearm"))
      return "forearm plank, body in one long line, side profile";
    return "full plank on hands and toes, straight body line, side profile";
  }

  if (bodyPosition === "Seated") {
    if (n.includes("twist") || n.includes("saw"))
      return "seated tall, legs extended, trunk rotating with arms reaching, three-quarter view";
    if (n.includes("side bend"))
      return "seated, reaching into lateral flexion, three-quarter view";
    if (n.includes("seal"))
      return "seated balanced on sit bones, knees bent feet lifted, holding ankles, side profile";
    return "seated tall on mat, legs extended forward, spine long, side profile";
  }

  if (bodyPosition === "Standing Integration") {
    if (n.includes("lunge") || n.includes("squat"))
      return "standing lunge or squat position, upright trunk, side profile";
    if (n.includes("roll down"))
      return "standing, spine rolling down toward the floor, side profile";
    if (n.includes("rotation") || n.includes("side bend"))
      return "standing, trunk rotating or side bending with arms reaching, side profile";
    if (n.includes("balance") || n.includes("reach"))
      return "standing on one leg, opposite arm reaching, balance pose, side profile";
    return "standing tall on mat, neutral alignment, side profile";
  }

  return `${bodyPosition.toLowerCase()} exercise pose, side profile on mat`;
}

function musclesForPrompt(primaryIds, stabilizerIds, primaryText) {
  const ids = [...new Set([...(primaryIds || []), ...(stabilizerIds || [])])];
  if (ids.length > 0) {
    return ids.map((id) => MUSCLE_LABELS[id] || id).join("; ");
  }
  if (primaryText && primaryText !== "Varies") {
    return primaryText;
  }
  return "deep core and primary working muscles for the exercise";
}

const dir = "content/exercises/manual";
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));
const entries = [];

for (const file of files) {
  const src = readFileSync(join(dir, file), "utf8");
  const slug = grab(src, /slug: "([^"]+)"/);
  const name = grab(src, /name: "([^"]+)"/);
  const bodyPosition = grab(src, /bodyPosition: "([^"]+)"/);
  const category = grab(src, /movementCategory: "([^"]+)"/);
  const primaryText = grab(src, /primaryMusclesText: "([^"]+)"/);

  const overlayPrimary = grabArray(src, /overlay:\s*\{[^]*?primary:\s*\[([^\]]*)\]/);
  const overlayStabilizers = grabArray(
    src,
    /overlay:\s*\{[^]*?stabilizers:\s*\[([^\]]*)\]/
  );
  const primaryIds = overlayPrimary.length
    ? overlayPrimary
    : grabArray(src, /primaryMuscleIds:\s*\[([^\]]*)\]/);
  const stabilizerIds = overlayStabilizers.length
    ? overlayStabilizers
    : grabArray(src, /stabilizerMuscleIds:\s*\[([^\]]*)\]/);

  const pose = poseFor(name, bodyPosition, category, slug);
  const muscles = musclesForPrompt(primaryIds, stabilizerIds, primaryText);
  const filename = `${slug}.png`;
  const publicPath = `/teaching-diagrams/${filename}`;

  const prompt =
    `${STYLE} Exercise: ${name}. Pose: ${pose}. ` +
    `Highlight these muscle areas in magenta-pink: ${muscles}.`;

  entries.push({
    slug,
    name,
    file,
    bodyPosition,
    category,
    filename,
    publicPath,
    prompt,
    primaryIds,
    stabilizerIds
  });
}

entries.sort((a, B) => a.name.localeCompare(B.name));

mkdirSync("scripts", { recursive: true });
mkdirSync("public/teaching-diagrams", { recursive: true });

writeFileSync(
  "scripts/teaching-diagram-manifest.json",
  JSON.stringify({ generatedAt: new Date().toISOString(), count: entries.length, entries }, null, 2)
);

console.log(`Wrote ${entries.length} entries to scripts/teaching-diagram-manifest.json`);
