// Funniest Time Machine Warning Label — make.fun bounty
// Writes one warning label for a time machine to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label: a genuine safety notice on its face — future passengers
// ride free — with the paradox doing the work: they already paid,
// in 1973, with your wallet. The surprise lands on the last words.
const ENTRY =
  "WARNING: Passengers from the future ride free. They already paid, in 1973, with your wallet.";

// Gate self-check (RULES.txt): UTF-8 text, 1 to 120 characters, not only
// white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-120`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
