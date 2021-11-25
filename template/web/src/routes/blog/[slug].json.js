import { client } from '$lib/sanityClient';

export async function get({ params: { slug } }) {
	const post = await client.fetch(/* groq */ `*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
    body[] {
      ...,
			children[] {
				...,
				// authorReference is an inline block, and will show inside PortableText spans (block.children)
				// Let's expand the reference to the author document & get its name, slug & image
				_type == "authorReference" => {
					author->{
						name,
						slug,
						image
					}
				}
			}
    }
  }`);

	if (post) {
		return {
			status: 200,
			body: {
				post: await post
			}
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
