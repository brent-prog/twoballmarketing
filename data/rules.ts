export const rules = [
  "Play dartboard numbers 1 through 18 in order.",
  "Every player throws exactly two darts per hole.",
  "Any other number or outside the number ring but on-the-board is a safe on-board miss - except the bull, 19 and 20.",
  "The complete 19 and 20 wedges and the bull are hazards.",
  "Completely off the board is also a hazard. Hazards are not safe misses.",
  "Lowest score after 18 wins. A tie is settled closest to the bull.",
] as const;
