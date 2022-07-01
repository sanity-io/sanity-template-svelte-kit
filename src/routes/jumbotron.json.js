import {getJumbotronPhotosQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

export async function get() {
  const {images} = await client.fetch(/* groq */ `{
  	"images": ${getJumbotronPhotosQuery()},
  }`)

  if (images) {
    return {
      status: 200,
      body: {
        photos: images
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
