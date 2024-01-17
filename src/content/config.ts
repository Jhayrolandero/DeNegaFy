import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      title: z.string(),
        image: image(), 
    })
});


const introductionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
});

const contributionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
})

export const collections = {
  'articles': articlesCollection,
  'introductions': introductionsCollection,
  'contributions': contributionsCollection
};
