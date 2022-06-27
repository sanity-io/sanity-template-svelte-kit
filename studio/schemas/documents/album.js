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
    },
    {
      name: 'cover',
      type: 'siteImage',
      title: 'Cover Image',
      description: 'Image that appears within the link to the album in the Gallery.'
    },
    {
      name: 'showOnHome',
      type: 'boolean',
      title: 'Display on Home Page',
      description: 'Photos from this album will be shown on the Homepage.'
    }
  ],
  initialValue: {
    showOnHome: true
  }
}
