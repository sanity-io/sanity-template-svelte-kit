import {UserIcon} from '@sanity/icons'

export default {
  name: 'author',
  type: 'document',
  icon: UserIcon,
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Address of this author in the website',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: "Author's photo",
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
      name: 'bio',
      type: 'array',
      title: 'Biography',
      of: [
        {
          type: 'block',
          title: 'Block',
          // Only allow paragraphs to be written in the bio
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ]
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
