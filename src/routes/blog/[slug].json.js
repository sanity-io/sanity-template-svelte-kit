import {AUTHOR_CARD_FRAGMENT} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Gets a specific blog post from its slug.current value
export async function get({params: {slug}}) {
  const post = await client.fetch(/* groq */ `*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
		"authors": authors[].author->{
			${AUTHOR_CARD_FRAGMENT}
		},
    body[] {
      ...,
			children[] {
				...,
				// authorReference is an inline block, and will show inside PortableText spans (block.children)
				// Let's expand the reference to the author document & get its name, slug & image
				_type == "authorReference" => {
					author->{
						${AUTHOR_CARD_FRAGMENT}
					}
				}
			}
    }
  }`)

  if (post) {
    return {
      status: 200,
      body: {
        post
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
