import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = '<#< sanity.projectId >#>'
const dataset = '<#< sanity.dataset >#>'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2021-10-21',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
