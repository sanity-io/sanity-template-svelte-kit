import {AUTHOR_CARD_FRAGMENT} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Gets a specific blog post from its slug.current value
export async function get({params: {album}}) {
  // const post = await client.fetch(/* groq */ `*[_type == "post" && slug.current == "${slug}"][0]{
  //   ...,
  // 	"authors": authors[].author->{
  // 		${AUTHOR_CARD_FRAGMENT}
  // 	},
  //   body[] {
  //     ...,
  // 		children[] {
  // 			...,
  // 			// authorReference is an inline block, and will show inside PortableText spans (block.children)
  // 			// Let's expand the reference to the author document & get its name, slug & image
  // 			_type == "authorReference" => {
  // 				author->{
  // 					${AUTHOR_CARD_FRAGMENT}
  // 				}
  // 			}
  // 		}
  //   }
  // }`)

  let name = ''
  let photos = []
  let quote = ''
  if (album === 'family') {
    name = 'Family'
    photos = [{slug: {current: 'family'}, title: 'Family', image: '/temp/family.jpeg', class: ''}]
    quote = 'Where life begins and love nver ends'
  }

  if (album === 'pets') {
    name = 'Pets'
    photos = [{slug: {current: 'pets'}, title: 'Pets', image: '/temp/family-dog.jpeg', class: ''}]
    quote = 'Pets understand humans better than humans do.'
  }

  if (album === 'couples') {
    name = 'Couples'
    photos = [{slug: {current: 'family'}, title: 'Family', image: '/temp/family.jpeg', class: ''}]
    quote = "You stole my heart, but I'll let you keep it."
  }

  if (album === 'artistic') {
    name = 'Artistic'
    photos = [
      {
        slug: {current: 'artistic'},
        title: 'Artistic',
        image: '/temp/wine.jpeg',
        class: 'landscape'
      },
      {
        slug: {current: 'couples'},
        title: 'Couples',
        image: '/temp/lake.jpeg',
        class: 'landscape'
      }
    ]
    quote =
      "The whole point of taking pictures is so that you don't have to explain things with words."
  }

  // if (post) {
  return {
    status: 200,
    body: {
      album: {
        name,
        quote,
        photos
      }
    }
  }
  // }

  // return {
  //   status: 500,
  //   body: new Error('Internal Server Error')
  // }
}
