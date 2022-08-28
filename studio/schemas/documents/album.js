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
      name: 'quote',
      type: 'string',
      title: 'Quote',
      description: "The quote that appears on the Album's Gallery page."
    },
    {
      title: 'Splash Image',
      name: 'splash',
      type: 'string',
      description: 'The little image displayed behind the title of the page.',
      options: {
        list: ['travel', 'heart'],
        layout: 'radio'
      }
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
  initialValue: async () => {
    const res = await fetch('https://type.fit/api/quotes')
    let data = []
    if (res.ok) data = await res.json()
    return {
      splash: 'heart',
      quote: data ? data[Math.floor(Math.random() * data.length)].text : '',
      showOnHome: true
    }
  }
}
