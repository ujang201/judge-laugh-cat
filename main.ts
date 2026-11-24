// judge-laugh-cat — writes one deadpan one-star cat review to entry.txt.
// Node 22, no dependencies. Output goes to $OUTPUT_DIR/entry.txt when set,
// otherwise /output/entry.txt. The text is written byte-for-byte, with no
// trailing newline, so the file's character count is exactly the review's.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "★☆☆☆☆ The food bowl sat empty for four whole minutes. I have filed a formal complaint with the dog, who is also useless. Would not recommend this human.";

function resolveOutputDir(): string {
  const dir = process.env.OUTPUT_DIR;
  return dir !== undefined && dir !== "" ? dir : "/output";
}

function main(): void {
  // The gate accepts 1–200 characters; fail loudly instead of writing an
  // entry the scorer would refuse.
  const length = [...REVIEW].length;
  if (length < 1 || length > 200) {
    throw new Error(`review is ${length} characters, must be 1–200`);
  }
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
}

main();
