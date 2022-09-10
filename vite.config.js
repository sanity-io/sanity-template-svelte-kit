import {sveltekit} from '@sveltejs/kit/vite'
import dns from 'dns'
dns.setDefaultResultOrder('verbatim') // Sets vite to localhost:<port> instead of 127.0.0.1:<port>

/** @type {import('vite').UserConfig['server']} */
const server = {
  origin: 'localhost',
  fs: {
    allow: ['studio']
  }
}

/** @type {import('vite').UserConfig} */
const config = {
  server,
  plugins: [sveltekit()]
}

export default config
