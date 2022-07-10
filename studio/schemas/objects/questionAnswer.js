export default {
  name: 'questionAnswer',
  type: 'object',
  title: 'Question & Answer',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'answer',
      type: 'text',
      title: 'Answer',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true
      }
    }
  ]
}
