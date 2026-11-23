// u-daring-gecko-25-one-line-laugh-sprint-cda708b2 entry (Node 22, standard library only).
//
// A single original funny line about everyday life. This program writes
// that line, and nothing else, to /output/entry.txt, where the house judge
// reads it.
//
// Draft 1 (candidate A — smart fridge):
//   "My smart fridge just emailed me a grocery list, a recipe, and a
//   passive-aggressive note about the leftovers I keep promising to eat."
//
// Draft 2 (candidate B — screen time, CHOSEN): the tightest of the five
// drafts, and the twist pays off on the very last words. Arguing with your
// own screen-time report, then checking your screen time to win the
// argument, is the most everyday and the freshest angle of the set.
//   "I told my phone's screen-time report it was lying, then checked my
//   screen time to prove it."
//
// The other drafts, kept out: Wi-Fi dropping mid-argument ("the router has
// chosen a side"), the standing desk abandoned for the floor ("technically
// closer to nature"), and the bank app charging a fee for its own
// congratulations — all fine, but each leans on a more familiar gripe, and
// none lands its twist as cleanly on the final words as draft 2.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 2 (chosen): the twist lands on the last words — you catch yourself
// using the very thing you are arguing about.
const LINE =
  "I told my phone's screen-time report it was lying, then checked my screen time to prove it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
