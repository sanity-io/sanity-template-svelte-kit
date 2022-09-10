import {getJumbotronPhotosQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {error} from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const {images} = await client.fetch(/* groq */ `{
  	"images": ${getJumbotronPhotosQuery()},
  }`)

  if (!images) throw error(404, 'Could not get images')

  return new Response(
    JSON.stringify({
      photos: images
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }
  )
}
