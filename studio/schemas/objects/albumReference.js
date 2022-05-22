export default {
  name: 'albumReference',
  type: 'object',
  title: 'Album reference',
  fields: [
    {
      name: 'album',
      type: 'reference',
      to: [
        {
          type: 'album'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'album.name'
      // media: 'album.image.asset'
    }
  }
}
