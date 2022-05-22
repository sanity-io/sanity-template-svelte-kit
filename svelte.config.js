import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    vite: {
      server: {
        fs: {
          allow: ['studio']
        }
      }
    }
  }
}

export default config
