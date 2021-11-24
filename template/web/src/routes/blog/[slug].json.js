import { client } from '$lib/sanityClient'

export async function get ({ params: { slug }}) {
  const post = await client.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`)
  
  if(post){
    return {
      status: 200,
      body: {
        post: await post
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
};