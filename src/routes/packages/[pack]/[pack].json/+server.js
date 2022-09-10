import {getPackageQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {error} from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({params: {pack}}) {
  const pckg = (
    await client.fetch(/* groq */ `{
  	"package": ${getPackageQuery(pack)},
  }`)
  ).package[0]

  if (!pckg) throw error(404, 'Could not get package')

  const {title, cost, quote, img1, img2, blurb, features, addons, faq, splash} = pckg

  return new Response(
    JSON.stringify({
      pack: {
        title,
        quote,
        splash,
        cost,
        blurb,
        previewImageOne: img1,
        previewImageTwo: img2,
        features,
        addons,
        faq
      }
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }
  )
}
