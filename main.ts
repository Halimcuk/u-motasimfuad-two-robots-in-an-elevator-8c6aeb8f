// Two Robots in an Elevator — make.fun entry.
// Writes one line of awkward robot small talk to the output text file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One awkward moment: a robot greets its fellow passenger by quoting
// its own elevator logs — setup first, punchline last.
const ENTRY =
  "So, do you come here often? My logs say we've shared this elevator 214 times and I've never once said hello.";

// The gate: 1 to 199 characters of UTF-8 text, not only whitespace.
// Counted in Unicode code points so multi-byte characters count once,
// matching how the competition counts the line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 199 || ENTRY.trim().length === 0) {
  throw new Error(`Entry length ${chars} is outside the 1-199 character gate.`);
}

// Output folder from the environment, falling back to the default.
const outDir =
  process.env.OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "output.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${chars} characters to ${outPath}`);
