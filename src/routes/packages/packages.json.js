import {getPackagesQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(/* groq */ `{
  	"packages": ${getPackagesQuery()},
  }`)

  if (data.packages) {
    const packages = data.packages.map(({cover, slug, title, features, cost}) => {
      return {
        title,
        cover,
        url: `/packages/${slug.current}`,
        features,
        cost
      }
    })

    return {
      status: 200,
      body: {
        packages
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
