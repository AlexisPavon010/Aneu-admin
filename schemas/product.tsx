import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'inStock',
      title: 'Stock',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      title: 'Gender',
      name: 'gender',
      type: 'string',
      options: {
        list: [
          { title: 'Best Seller', value: 'best-seller' },
          { title: 'News', value: 'news' },
          { title: 'Sale', value: 'sale' },
        ],
      },
    }),
    defineField({
      title: 'Sizes',
      name: 'sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'XS', value: 'XS' },
          { title: 'S', value: 'S' },
          { title: 'M', value: 'M' },
          { title: 'L', value: 'L' },
          { title: 'XL', value: 'XL' },
          { title: 'XXL', value: 'XXL' },
          { title: 'XXXL', value: 'XXXL' },
        ],
      },
    }),
    defineField({
      name: 'images',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),
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
