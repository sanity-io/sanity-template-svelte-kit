import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Address of this post in the website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Main image'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      title: 'Post body',
      type: 'portableText',
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image'
    },
    prepare({title = 'No title', slug, media}) {
      const path = `/blog/${slug.current}/`
      return {
        title,
        media,
        subtitle: path
      }
    }
  }
}
