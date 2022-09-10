import {error} from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
  try {
    const url = `/packages/packages.json`
    const res = await fetch(url)
    const data = await res.json()

    if (data) {
      return data
    }
  } catch (err) {
    throw error(500, `Could not load packages`)
  }
}
