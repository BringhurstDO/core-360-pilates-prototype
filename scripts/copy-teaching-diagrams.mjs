import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const manifest = JSON.parse(
  readFileSync("scripts/teaching-diagram-manifest.json", "utf8")
);

const assetsDir =
  process.env.TEACHING_ASSETS_DIR ||
  "C:/Users/aktwi/.cursor/projects/c-Users-aktwi-SyncApps-Pilates-App/assets";
const outDir = "public/teaching-diagrams";

mkdirSync(outDir, { recursive: true });

let copied = 0;
for (const entry of manifest.entries) {
  const src = join(assetsDir, entry.filename);
  const dest = join(outDir, entry.filename);
  if (existsSync(src)) {
    copyFileSync(src, dest);
    copied++;
  }
}

console.log(`Copied ${copied} / ${manifest.entries.length} diagrams to ${outDir}`);
console.log(`In public: ${readdirSync(outDir).filter((f) => f.endsWith(".png")).length} PNGs`);
