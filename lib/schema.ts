export const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://twoballdarts.com/#website",
  url: "https://twoballdarts.com/",
  name: "TwoBall Darts",
  description:
    "TwoBall Darts is a golf-style darts game played over 18 holes with exactly two darts per hole.",
  inLanguage: "en",
};

export const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://twoballdarts.com/#brand",
  name: "TwoBall Darts",
  url: "https://twoballdarts.com/",
  logo: "https://twoballdarts.com/brand/twoball-badge.webp",
};

export const gameSchema = {
  "@context": "https://schema.org",
  "@type": "Game",
  "@id": "https://twoballdarts.com/#game",
  name: "TwoBall Darts",
  url: "https://twoballdarts.com/",
  image: "https://twoballdarts.com/brand/twoball-badge.webp",
  description:
    "A golf-style darts game played on a standard dartboard. Players play numbers 1 through 18 as holes, throw exactly two darts per hole and try to finish with the lowest total score.",
  genre: ["Darts game", "Golf-style scoring game"],
  gameItem: ["Standard dartboard", "Two darts per player"],
  potentialAction: {
    "@type": "PlayAction",
    target: "https://play.twoballdarts.com/",
  },
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://twoballdarts.com/#how-to-play",
  name: "How to Play TwoBall Darts",
  description:
    "Play numbers 1 through 18 as golf holes using exactly two darts per hole. Lowest total score wins.",
  totalTime: "PT30M",
  supply: [
    { "@type": "HowToSupply", name: "Standard dartboard" },
    { "@type": "HowToSupply", name: "Two darts per player" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pick the hole",
      text: "Start at number 1 on the dartboard. That number is the target for the first hole.",
      url: "https://twoballdarts.com/#how-to-play",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Throw two darts",
      text: "Each player throws exactly two darts at the target number.",
      url: "https://twoballdarts.com/#how-to-play",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Score the hole like golf",
      text: "Target hits, doubles, triples, safe misses and hazards determine a golf-style score from Eagle through Triple Bogey.",
      url: "https://twoballdarts.com/#scoring",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Finish 18 holes",
      text: "Continue through dartboard numbers 1 to 18. The player with the lowest total score wins.",
      url: "https://twoballdarts.com/#rules",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://twoballdarts.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TwoBall Darts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TwoBall Darts is a golf-style darts game. Numbers 1 through 18 are played as holes, each player throws exactly two darts per hole and the lowest total score wins.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need to play TwoBall Darts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a standard dartboard and two darts per player.",
      },
    },
    {
      "@type": "Question",
      name: "How many darts do you throw in TwoBall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exactly two darts are thrown by each player on every hole.",
      },
    },
    {
      "@type": "Question",
      name: "How many holes are in TwoBall Darts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full round has 18 holes, using dartboard numbers 1 through 18 in order.",
      },
    },
    {
      "@type": "Question",
      name: "What are the hazards in TwoBall Darts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The complete 19 wedge, complete 20 wedge and the bull are hazards. A dart completely off the board is also a hazard.",
      },
    },
    {
      "@type": "Question",
      name: "How do you win TwoBall Darts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The player with the lowest total score after 18 holes wins.",
      },
    },
  ],
};
