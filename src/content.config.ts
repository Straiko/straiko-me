import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogRu = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    hero: z
      .object({
        src: z.string(),
        alt: z.string().default("")
      })
      .optional()
  })
});

const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-en" }),
  schema: blogRu.schema
});

export const collections = { blogRu, blogEn };

