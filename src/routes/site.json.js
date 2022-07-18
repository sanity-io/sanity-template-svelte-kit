import {getSiteQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

export async function get() {
  const {site} = await client.fetch(`{
  	"site": ${getSiteQuery()},
  }`)

  if (site) {
    return {
      status: 200,
      body: site[0]
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
