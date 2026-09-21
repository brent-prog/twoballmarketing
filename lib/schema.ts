export const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://twoballdarts.com/#website",
  url: "https://twoballdarts.com/",
  name: "TwoBall Darts",
  description: "Golf scoring played on a dartboard using two darts over eighteen holes.",
};

export const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://twoballdarts.com/#brand",
  name: "TwoBall Darts",
  url: "https://twoballdarts.com/",
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Play TwoBall Darts",
  description: "Play eighteen dartboard numbers as golf holes using exactly two darts per hole.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Pick the hole", text: "Start at number 1 on the dartboard. That number is the only target that matters." },
    { "@type": "HowToStep", position: 2, name: "Throw two darts", text: "Throw exactly two darts at the target." },
    { "@type": "HowToStep", position: 3, name: "Score it like golf", text: "Your two throws determine a golf-style score." },
    { "@type": "HowToStep", position: 4, name: "Finish the course", text: "Play numbers 1 through 18. Lowest total score wins." },
  ],
};
