export const scoring = [
  { name: "EAGLE", relative: "-2", strokes: 1, description: "Both darts hit a double or triple of the target." },
  { name: "BIRDIE", relative: "-1", strokes: 2, description: "One double or triple target plus one single target." },
  { name: "PAR", relative: "E", strokes: 3, description: "Two single targets, or one power hit plus a safe on-board miss." },
  { name: "BOGEY", relative: "+1", strokes: 4, description: "One single plus a safe on-board miss, or a power hit plus a hazard." },
  { name: "DOUBLE BOGEY", relative: "+2", strokes: 5, description: "Two safe on-board misses, or one single target plus a hazard." },
  { name: "TRIPLE BOGEY", relative: "+3", strokes: 6, description: "No target hits and at least one hazard." },
] as const;
