import {getPhotosQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {getAlbumQuery} from '../../../../lib/queries'
import {error} from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({params: {album}}) {
  const alb = (
    await client.fetch(/* groq */ `{
  	"album": ${getAlbumQuery(album)},
  }`)
  ).album[0]

  if (!alb) throw error(404, 'Could not get album')

  const {images} = await client.fetch(/* groq */ `{
  	"images": ${getPhotosQuery(`album.album->slug.current == "${album}"`)},
  }`)

  if (!images) throw error(404, 'Could not get images for album')

  return new Response(
    JSON.stringify({
      album: {
        name: alb.title,
        quote: alb.quote,
        splash: alb.splash,
        photos: images
      }
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }
  )
}
