import {BasketIcon} from '@sanity/icons'

export default {
  name: 'package',
  type: 'document',
  icon: BasketIcon,
  title: 'Package',
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
      description: 'Used in the url of this Package on the website.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Cost',
      name: 'cost',
      type: 'string',
      description: 'The starting cost of the Package. eg. $100',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      description: 'The main features of this package. Up to 3 will be displayed in the preview.',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Addons',
      name: 'addons',
      type: 'array',
      description: 'The extra of this package. eg. Additional family member - $25',
      of: [{type: 'string'}]
    },
    {
      title: 'Blurb',
      name: 'blurb',
      type: 'text',
      description: 'Any extra details you want to include at the bottom of the Package.'
    },
    {
      name: 'quote',
      type: 'string',
      title: 'Quote',
      description: "The quote that appears on the Packages's page."
    },
    {
      name: 'cover',
      type: 'siteImage',
      title: 'Cover Image',
      description: 'Image that appears within the link to the package in the Package listing.'
    },
    {
      name: 'img1',
      type: 'siteImage',
      title: 'Preview Image 1',
      description: 'Image that appears first on the Package page.'
    },
    {
      name: 'img2',
      type: 'siteImage',
      title: 'Preview Image 2',
      description: 'Image that appears second on the Package page.'
    },
    {
      title: 'FAQ',
      name: 'faq',
      type: 'array',
      description: 'The main features of this package. Up to 3 will be displayed in the preview.',
      of: [{type: 'questionAnswer'}],
      validation: (Rule) => Rule.max(4)
    }
  ]
}
