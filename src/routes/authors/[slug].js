import {getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Gets a specific author from its slug.current value
export async function get({params: {slug}}) {
  const author =
    await client.fetch(/* groq */ `*[_type == "author" && slug.current == "${slug}"][0]{
    ...,
		"posts": ${getPostsQuery(`
			// Get every post that includes the current document _id in its authors[]
			^._id in authors[].author._ref
		`)}
  }`)

  if (author) {
    return {
      status: 200,
      body: {
        author
      }
    }
  }

  return {
    status: 404
  }
}
