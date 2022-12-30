import { defineField, defineType } from "sanity";

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],

  preview: {
    select: {
      title: 'description',
      media: 'images',
    },
    prepare(selection) {
      const { media } = selection;
      return { ...selection, media: media[0].asset }
    },
  },
})