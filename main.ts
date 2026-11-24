// One-Sentence Absurd Invention Pitch: a kettle that sighs when
// overworked and files a formal complaint with the toaster if you
// boil it twice. The tiny annoyance — a tired kettle — fixed by
// giving the appliances a grievance procedure.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 220 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A kettle that sighs when overworked and files a formal complaint with the toaster if you boil it twice.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 220 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-220 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
