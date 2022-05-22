import {UserIcon} from '@sanity/icons'

export default {
  name: 'photographer',
  type: 'document',
  icon: UserIcon,
  title: 'Photographer',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: "Photographer's photo",
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
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
