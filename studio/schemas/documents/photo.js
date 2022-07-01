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
      type: 'albumReference',
      validation: (Rule) => Rule.error('You have to select an Album.').required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing.'
    },
    {
      name: 'showOnHome',
      type: 'boolean',
      title: 'Display on Home Page',
      description: 'Photos from this album will be shown on the Homepage.'
    }
  ],
  initialValue: {
    publishedAt: new Date().toDateString(),
    showOnHome: true
  },
  preview: {
    select: {
      title: 'publishedAt',
      media: 'image',
      subtitle: 'album.title'
    }
  }
}
