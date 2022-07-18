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

export function getPackagesQuery(extraFilter) {
  return /* groq */ `*[
    _type == "package" &&
    defined(slug.current) 
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc) {
    title,
    slug,
    cover,
    cost,
    features
  }`
}

export function getPackageQuery(pckg) {
  return /* groq */ `*[
    _type == "package" &&
    defined(slug.current) &&
    slug.current == "${pckg}"
  ] | order(publishedAt desc) {
    title,
    slug,
    cover,
    cost,
    features,
    addons,
    blurb,
    quote,
    img1,
    img2,
    faq
  }`
}

export function getSiteQuery() {
  return /* groq */ `*[
    _type == "siteSettings"
  ] | order(publishedAt desc) {
    title,
    bioImage,
    bio1Title,
    bio1,
    bio2Title,
    bio2,
    facebookUrl,
    instagramUrl,
    keywords
  }`
}
