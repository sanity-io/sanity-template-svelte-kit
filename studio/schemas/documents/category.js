import {TagIcon} from '@sanity/icons'

export default {
  name: 'category',
  type: 'document',
  icon: TagIcon,
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
