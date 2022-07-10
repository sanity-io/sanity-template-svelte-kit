import {getPackageQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

export async function get({params: {pack}}) {
  const pckg = (
    await client.fetch(/* groq */ `{
  	"package": ${getPackageQuery(pack)},
  }`)
  ).package[0]

  if (pckg) {
    const {title, cost, quote, img1, img2, blurb, features, addons, faq} = pckg
    return {
      status: 200,
      body: {
        pack: {
          title,
          quote,
          cost,
          blurb,
          previewImageOne: img1,
          previewImageTwo: img2,
          features,
          addons,
          faq
        }
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
