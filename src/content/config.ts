import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        date: z.string(),
        title: z.string(), 
        image: z.string(), 
    })
});
export const collections = {
  'articles': articlesCollection,
};