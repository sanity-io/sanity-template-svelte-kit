import {getSiteQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {error} from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const {site} = await client.fetch(`{
  	"site": ${getSiteQuery()},
  }`)

  if (!site[0]) throw error(404, 'Could not get site settings')

  return new Response(JSON.stringify(site[0]), {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
}
