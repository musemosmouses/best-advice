// The Best Advice I Ever Got — a one-line entry for make.fun.
// The program writes exactly one sentence to /output/entry.txt:
// the best advice the writer ever received, in a single breath.
// The advice: an apology only counts when it costs you something —
// saying sorry for free is just noise to make yourself feel better.
// Spoken by the writer's mother, watching them rehearse an apology
// they did not mean — a real moment, a real voice, no slogan.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My mother, watching me rehearse an apology I did not mean, said sorry only counts when it costs you something — otherwise it is just noise to make yourself feel better.";

// The grader mounts a fresh, writable /output and sets MAKEFUN_OUTPUT_DIR
// to it; locally the same variable points at a scratch dir for testing.
// Fall back to the literal /output path so the program also runs bare.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1–200 characters; refuse loudly instead of
// ever writing an over-long line that would score zero.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
