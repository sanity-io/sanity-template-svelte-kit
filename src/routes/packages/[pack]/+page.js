import {error} from '@sveltejs/kit'
/** @type {import('./$types').PageLoad} */
export async function load({params, fetch}) {
  try {
    const url = `/packages/${params.pack}/${params.pack}.json`
    const res = await fetch(url)
    const data = await res.json()
    if (data?.pack) {
      return data.pack
    }
  } catch (err) {
    throw error(500, `Could not load url`)
  }
}
