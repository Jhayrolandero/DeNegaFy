import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      title: z.string(),
        image: image(), 
    })
});
export const collections = {
  'articles': articlesCollection,
};