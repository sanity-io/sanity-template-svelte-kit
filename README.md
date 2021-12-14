# SvelteKit / Sanity.io starter

_Front-end for your Sanity project, built with [Svelte Kit](https://kit.svelte.dev)._

This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it by **[creating this project](https://www.sanity.io/create?template=sanity-io%2Fsanity-template-svelte-kit)**.

The template contains both a Sanity.io Sanity Studio and a front-end in Svelte Kit. Both are deployed on Netlify.

![The Sanity and SvelteKit powered template](https://github.com/sanity-io/sanity-template-svelte-kit/blob/main/.sanity-template/web.jpg?raw=true)

Want to make a template for Sanity and your favorite front-end framework? We’re still maturing [sanity.io/create](https://sanity.io/create) and our APIs, but do tell us about it on [slack.sanity.io](https://slack.sanity.io).

## Local development

### Developing the front-end

1. Install dependencies with `npm install` or `yarn` in the root folder.
1. Run `npm run dev` in root folder.
1. The website will be running in `localhost:3000`

### Developing the Sanity studio

1. From the `studio` folder, install dependencies with `yarn` or `sanity install` (if you have the [Sanity CLI installed](https://www.sanity.io/docs/getting-started-with-sanity-cli))
1. Then, run `yarn start`
1. Your studio will be running in `localhost:3333`

## Starting with the local template

If you don't want to start from the [automatically deployed project](https://www.sanity.io/create?sanity-io%2Fsanity-template-svelte-kit), you can clone this repository and replace the variables found in `studio/sanity.json` with your Sanity project's credentials.

## Credits

Huge thanks to [Jacob Størdahl](https://github.com/stordahl) for their help in scoping and bringing this starter to life with a lot of positive energy. Thank you, Jacob 🙏

## Developing

Start by installing dependencies with `npm install` (or `pnpm install` or `yarn`). Then, start a development server:

```bash
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Your site should already be connected to [Netlify](https://netlify.com). If you want, you can install any [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. To execute builds locally, run:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
