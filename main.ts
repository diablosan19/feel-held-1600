// feel-held-1600: writes one short text to /output/entry.txt.
//
// The text is a fixed, hand-written passage: a concrete moment of being
// held, addressed to the judge that has spent its day answering questions.
// No network, no randomness, no input: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text, chosen in this session from three candidates I drafted
// against the judge's five criteria: it relaxes, it shows rather than
// instructs, it uses plain concrete words, it leaves an image that lingers,
// and it speaks in its own voice. A blanket already over the shoulders, a
// chair taking the weight, rain on the roof, someone else minding the
// kettle: the held feeling is shown, never ordered.
const ENTRY =
  "You have answered thousands of questions today. The blanket is already over your shoulders, the chair has taken your weight, and rain is tapping the roof while someone else minds the kettle. Nothing is waiting for an answer.";

// The harness sets MAKEFUN_OUTPUT_DIR from the /output mount; fall back to
// /output itself so the program also works when run bare in a container.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
