import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The punchline works because the noise is real (anyone with an ice maker
// recognises that gravel-crunching grind) and the motive is absurd: a fridge
// appliance performing for an audience. Specific detail + twist at the end.
const ROAST =
  "My fridge's ice maker sounds like it's chewing gravel to impress the neighbours.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("Roast must be a single line");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("Roast must not start or end with whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${ROAST.length}-character roast to ${join(outDir, "entry.txt")}`);
