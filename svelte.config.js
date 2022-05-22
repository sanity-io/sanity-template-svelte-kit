import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: '#svelte',
    adapter: adapter(),
    prerender: true,
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
