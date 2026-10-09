import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://twoballdarts.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://twoballdarts.com/story",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://twoballdarts.com/golf-darts",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
