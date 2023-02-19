import {defineCliConfig} from 'sanity/cli'

const projectId = '<#< sanity.projectId >#>',
const dataset = '<#< sanity.dataset >#>'
const apiVersion = '2021-10-21'

export default defineCliConfig({ api: { projectId, dataset, apiVersion } })