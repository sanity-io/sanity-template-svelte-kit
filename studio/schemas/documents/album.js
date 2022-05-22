import {BookIcon} from '@sanity/icons'

export default {
  name: 'album',
  type: 'document',
  icon: BookIcon,
  title: 'Album',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Used in the url of this Album on the website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }
  ]
}
