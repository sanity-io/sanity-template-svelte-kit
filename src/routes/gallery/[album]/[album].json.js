import {getPhotosQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {getAlbumQuery} from '../../../lib/queries'

// Gets a specific blog post from its slug.current value
export async function get({params: {album}}) {
  const alb = (
    await client.fetch(/* groq */ `{
  	"album": ${getAlbumQuery(album)},
  }`)
  ).album[0]

  const {images} = await client.fetch(/* groq */ `{
  	"images": ${getPhotosQuery(`album.album->slug.current == "${album}"`)},
  }`)

  if (alb && images) {
    return {
      status: 200,
      body: {
        album: {
          name: alb.title,
          quote: alb.quote,
          splash: alb.splash,
          photos: images
        }
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
