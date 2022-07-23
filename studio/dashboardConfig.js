export default {
  widgets: [
    {
      name: 'document-list',
      options: {title: 'Recent Photos', order: '_createdAt desc', types: ['photo']},
      layout: {width: 'small'}
    },
    {
      name: 'document-list',
      options: {title: 'Albums', types: ['album']},
      layout: {width: 'small'}
    },
    {
      name: 'document-list',
      options: {title: 'Packages', types: ['package']},
      layout: {width: 'small'}
    }
  ]
}
