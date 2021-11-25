import { client } from '$lib/sanityClient';

export async function get() {
	const posts = await client.fetch(/* groq */ `*[
    _type == "post" && defined(slug.current) && publishedAt < now()
  ] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
  }`);

	if (posts) {
		return {
			status: 200,
			body: {
				posts: await posts
			}
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
