export const prerender = true

/** @type {import('./$types').LayoutLoad} */
export async function load({url, fetch}) {
  const siteRes = await fetch(`/site.json`)
  const site = await siteRes.json()

  return {
    url: url.href,
    site
  }
}
