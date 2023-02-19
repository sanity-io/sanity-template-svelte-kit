import {error} from '@sveltejs/kit'
import {AUTHOR_CARD_FRAGMENT} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {dev} from '$app/environment'
export const csr = false

// Gets a specific blog post from its slug.current value

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  if (dev) {
    console.log(`[Server] Opened Page: ${params.slug}`)
  }
  const post =
    await client.fetch(/* groq */ `*[_type == "post" && slug.current == "${params.slug}"][0]{
    ...,
    "image": mainImage,
		"author": author->{
			${AUTHOR_CARD_FRAGMENT}
		},
  }`)

  if (post) {
    if (dev) {
      console.log(`[Server] Post opened is ${post.title}`)
    }
    return {
      post
    }
  }

  throw error(404, 'Not found')
}
