import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  hero: z.object({
    src: z.string(),
    alt: z.string(),
  }).optional(),
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const blogEn = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog,
  "blog-en": blogEn,
};
