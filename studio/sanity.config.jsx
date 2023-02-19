import {visionTool} from '@sanity/vision'
import {dashboardConfig} from './dashboardConfig.js'
import {deskTool} from 'sanity/desk'
import {defineConfig} from 'sanity'
import {schemaTypes} from './schemas'

const projectId = '<#< sanity.projectId >#>'
const dataset = '<#< sanity.dataset >#>'
const apiVersion = '2021-10-21'
// see https://www.sanity.io/docs/api-versioning for how versioning works

export default defineConfig({
  projectId,
  dataset,
  //edit schemas in './sanity/schema'
  schema: {
    types: schemaTypes
  },
  plugins: [
    dashboardConfig,
    deskTool(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion})
  ]
})
