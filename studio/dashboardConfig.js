export default {
  widgets: [
    {
      name: 'document-list',
      options: {title: 'Recent Photos', order: '_createdAt desc', types: ['photo']},
      layout: {width: 'medium'}
    },
    {
      name: 'document-list',
      options: {title: 'Albums', types: ['album']},
      layout: {width: 'medium'}
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AustinMcPhail/kelseyleaphotography',
            category: 'Code'
          },
          {title: 'Frontend', value: '', category: 'apps'}
        ]
      },
      layout: {width: 'small'}
    }
  ]
}
