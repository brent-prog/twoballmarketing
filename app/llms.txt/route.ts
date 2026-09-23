export function GET() {
  const body = `# TwoBall Darts

> TwoBall Darts is a golf-style darts game played on a standard dartboard.

## Core rules
- Play dartboard numbers 1 through 18 as holes.
- Each player throws exactly two darts per hole.
- Lowest total score after 18 holes wins.
- The complete 19 wedge, complete 20 wedge and bull are hazards.
- A dart completely off the board is also a hazard.

## Key pages
- Website: https://twoballdarts.com/
- How to play: https://twoballdarts.com/#how-to-play
- Scoring: https://twoballdarts.com/#scoring
- Rules: https://twoballdarts.com/#rules
- Play online: https://play.twoballdarts.com/
- TwoBall merch: https://keepfunsimple.com/shop/twoball

## Brand
TwoBall Darts is a RockPail production.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
