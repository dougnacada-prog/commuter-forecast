// Charm the Commuter: Forecast a City That Isn't
// One line of weather for a city that does not exist — writes it to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Puddleton: showers all day, puddles like small lakes. The ducks have formed a queue. You are behind the ducks.";

// The gate only accepts 1–140 characters of non-blank UTF-8 text: fail loudly here
// rather than shipping a line the sealed scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1–140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
