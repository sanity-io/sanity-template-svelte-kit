import {error} from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
  try {
    const url = `/jumbotron.json`
    const res = await fetch(url)
    const data = await res.json()
    if (data?.photos) {
      return data
    }
  } catch (err) {
    throw error(500, `Could not load url`)
  }
}
