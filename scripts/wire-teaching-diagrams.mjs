/**
 * Adds media.teachingDiagram to manual exercise files when PNG exists in public/teaching-diagrams/
 * Run: node scripts/wire-teaching-diagrams.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const manifest = JSON.parse(
  readFileSync("scripts/teaching-diagram-manifest.json", "utf8")
);
const diagramDir = "public/teaching-diagrams";

let wired = 0;
let skipped = 0;
let missing = 0;

for (const entry of manifest.entries) {
  const pngPath = join(diagramDir, entry.filename);
  if (!existsSync(pngPath)) {
    missing++;
    continue;
  }

  const tsPath = join("content/exercises/manual", entry.file);
  let src = readFileSync(tsPath, "utf8");

  if (src.includes("teachingDiagram:")) {
    skipped++;
    continue;
  }

  const block = `  media: {
    teachingDiagram: {
      id: "${entry.slug}-teaching",
      title: "${entry.name}",
      description: "Generated muscle-emphasis teaching diagram for ${entry.name}.",
      poseNotes: [],
      annotationLabels: [],
      kind: "uploaded",
      imageSrc: "${entry.publicPath}",
      imageAlt: "${entry.name} teaching diagram with highlighted muscles"
    }
  }`;

  src = src.trimEnd();
  if (!src.endsWith("};")) {
    console.warn(`Unexpected file ending: ${entry.file}`);
    continue;
  }

  // Drop trailing "};", then comma-separate programming before media.
  src = src.slice(0, -2) + ",\n" + block + "\n};\n";
  writeFileSync(tsPath, src);
  wired++;
}

console.log(`Wired: ${wired}, already had diagram: ${skipped}, PNG missing: ${missing}`);
console.log(`Available PNGs: ${readdirSync(diagramDir).filter((f) => f.endsWith(".png")).length}`);
