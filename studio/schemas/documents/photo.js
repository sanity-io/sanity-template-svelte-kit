import {ImageIcon} from '@sanity/icons'

export default {
  name: 'photo',
  type: 'document',
  title: 'Photo',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of your image',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Used in the url of this photo on the website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true
      },
      // Images can have extra fields to annotate the image with supporting content
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'album',
      title: 'album',
      type: 'albumReference'
    },
    {
      name: 'photographer',
      title: 'Photographer',
      type: 'photographerReference'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
      album: 'album'
    },
    prepare({title = 'No title', slug, media, album}) {
      const path = `/${album.slug.current}/${slug.current}/`
      return {
        title,
        media,
        album,
        subtitle: path
      }
    }
  }
}
