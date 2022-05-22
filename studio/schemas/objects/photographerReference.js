export default {
  name: 'photographerReference',
  type: 'object',
  title: 'Photographer reference',
  fields: [
    {
      name: 'photographer',
      type: 'reference',
      to: [
        {
          type: 'photographer'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'photographer.name',
      media: 'photographer.image.asset'
    }
  }
}
