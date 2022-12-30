import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
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
      title: 'title',
      media: 'images',
    },
    prepare(selection) {
      const { media } = selection;
      return { ...selection, media: media[0].asset }
    },
  },
})