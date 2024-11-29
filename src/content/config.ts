import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
