import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'

export const dashboardConfig = dashboardTool({
  widgets: [
    projectInfoWidget(),
    netlifyWidget({
      title: 'My Netlify deploys',
      sites: [
        {
          buildHookId: '<#<deployments.studio.providerInfo.buildHookId>#>',
          title: 'Sanity Studio',
          name: '<#<deployments.studio.providerInfo.siteName>#>',
          apiId: '<#<deployments.studio.providerInfo.siteId>#>'
        },
        {
          buildHookId: '<#<deployments.web.providerInfo.buildHookId>#>',
          title: 'Blog Website',
          name: '<#<deployments.web.providerInfo.siteName>#>',
          apiId: '<#<deployments.web.providerInfo.siteId>#>'
        }
      ]
    }),
    projectUsersWidget({layout: {height: 'auto'}}),
    documentListWidget({
      title: 'Recent blog posts',
      order: '_createdAt desc',
      types: ['post']
    })
  ]
})
