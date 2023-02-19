import {error} from '@sveltejs/kit'

import {getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {dev} from '$app/environment'
export const csr = false

// Gets a specific author from its slug.current value
export async function load({params: {slug}}) {
  const author =
    await client.fetch(/* groq */ `*[_type == "author" && slug.current == "${slug}"][0]{
    ...,
		"posts": ${getPostsQuery(`
			// Get every post that includes the current document _id in its authors[]
			references(^._id)
		`)}
  }`)

  if (author) {
    if (dev) {
      console.log(`[Server] Post opened is ${author.name}`)
    }
    return {
      author
    }
  }

  throw error(404, 'Not found')
}
