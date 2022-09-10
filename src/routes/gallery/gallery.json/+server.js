import {getAlbumsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {error} from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  /** @type {{albums: {cover: string, slug: {current: string}, title: string}[]}} */
  const data = await client.fetch(/* groq */ `{
  	"albums": ${getAlbumsQuery()},
  }`)
  if (!data) throw error(404, 'Could not get albums')

  const albums = data.albums.map(({cover, slug, title}) => {
    return {
      title,
      cover,
      url: `/gallery/${slug.current}`
    }
  })

  if (!albums) throw error(404, 'Could not get albums')

  return new Response(
    JSON.stringify({
      albums
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }
  )
}
