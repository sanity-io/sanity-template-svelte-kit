import {error} from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({params, fetch}) {
  try {
    const url = `/gallery/${params.album}/${params.album}.json`
    const res = await fetch(url)
    const data = await res.json()
    if (data?.album) {
      return data.album
    }
  } catch (err) {
    throw error(500, `Could not load url`)
  }
}
