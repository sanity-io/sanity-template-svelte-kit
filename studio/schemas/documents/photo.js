import {ImageIcon} from '@sanity/icons'

export default {
  name: 'photo',
  type: 'document',
  title: 'Photo',
  icon: ImageIcon,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true
      },
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
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing.'
    }
  ],
  initialValue: {
    publishedAt: new Date().toISOString()
  },
  preview: {
    select: {
      title: 'publishedAt',
      media: 'image',
      subtitle: 'album.title'
    }
  }
}
