/**
 * Example of how you could re-use GROQ queries across different contexts with Javascript.
 * As your schema evolves, this pattern will be useful to keep your data in sync across all surfaces.
 */
export function getPhotosQuery(extraFilter) {
  return /* groq */ `*[
    _type == "photo" &&
    publishedAt < now()
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc) {
    image,
    publishedAt
  }`
}

export function getJumbotronPhotosQuery() {
  return /* groq */ `*[
    _type == "photo" &&
    publishedAt < now() &&
    showOnHome == true && 
    album.album->showOnHome == true
  ] | order(publishedAt desc) {
    image,
    publishedAt,
    album {
      album->{title, slug}
    }
  }`
}

export function getAlbumsQuery(extraFilter) {
  return /* groq */ `*[
    _type == "album" &&
    defined(slug.current)
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc) {
    title,
    slug,
    cover,
  }`
}

export function getAlbumQuery(album) {
  return /* groq */ `*[
    _type == "album" &&
    defined(slug.current) &&
    slug.current == "${album}"
  ] {
    title,
    slug,
    cover,
    quote,
  }`
}
