import {AUTHOR_CARD_FRAGMENT, getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all valid posts & authors to display in the homepage
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()},
		"authors": *[_type == "author" && defined(slug.current)] {
			${AUTHOR_CARD_FRAGMENT}
		}
  }`)

  if (data) {
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 404
  }
}
