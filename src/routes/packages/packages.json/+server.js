import {getPackagesQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {error} from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const data = await client.fetch(/* groq */ `{
  	"packages": ${getPackagesQuery()},
  }`)
  if (!data || !data.packages) throw error(404, 'Could not get packages')

  const packages = data.packages.map(({cover, slug, title, features, cost}) => {
    return {
      title,
      cover,
      url: `/packages/${slug.current}`,
      features,
      cost
    }
  })

  return new Response(
    JSON.stringify({
      packages
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }
  )
}
