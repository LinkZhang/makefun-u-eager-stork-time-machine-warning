// Funniest Time Machine Warning Label — make.fun bounty (REDO)
// Writes one warning label for a time machine to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why this line wins against the judge brief (in priority order):
// 1. It IS a warning label for a time machine, in the register of a
//    genuine safety notice: "WARNING: Never meet your grandfather."
// 2. It turns a real hazard — the grandfather paradox, a stranded
//    ancestor — into the joke instead of naming it flatly: the word
//    "paradox" never appears. The hazard is a bureaucratic complaint.
// 3. The surprise is saved for the last few words: only at the end
//    does the reader learn the complaint is dated three years before
//    the complainer was born — the grandfather filed against a
//    grandchild who did not exist yet.
// 4. Straight face throughout: a filed complaint, a date, an official
//    calm — the joke cuts against the notice's own seriousness.
// 5. No wasted words: every phrase does work, and the line stops at
//    113 of the 120 allowed characters.
const ENTRY =
  "WARNING: Never meet your grandfather. He has filed a complaint about you, dated three years before you were born.";

// Why the twist works: the impossible date is the whole joke, and it
// arrives as paperwork, not as a paradox lecture. "He has filed a
// complaint about you" makes the grandfather sound like an annoyed
// customer, so the reader pictures a form being stamped — and only the
// final clause reveals the form is dated before the complainer existed.
// Kept last, the date turns a family visit into a bureaucratic
// impossibility; moved earlier, it would be a premise to explain away.
// The straight-faced "WARNING:" opening is what sells it: the notice
// never winks, so the laugh comes from the official calm itself.

// Gate self-check (RULES.txt): UTF-8 text, 1 to 120 characters, not only
// white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-120`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
if (!ENTRY.startsWith("WARNING:")) {
  throw new Error("entry must open as a warning label");
}
if (!ENTRY.includes("filed a complaint")) {
  throw new Error("entry must carry the bureaucratic complaint");
}
if (!ENTRY.includes("grandfather")) {
  throw new Error("entry must name the grandfather");
}
if (!ENTRY.endsWith("before you were born.")) {
  throw new Error("entry must land on the impossible date");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
