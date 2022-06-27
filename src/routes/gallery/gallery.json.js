import {getAlbumsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(/* groq */ `{
  	"albums": ${getAlbumsQuery()},
  }`)

  if (data.albums) {
    const albums = data.albums.map(({cover, slug, title}) => {
      return {
        title,
        cover,
        url: `/gallery/${slug.current}`
      }
    })

    return {
      status: 200,
      body: {
        albums
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
