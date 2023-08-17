/** @type {import(""@sveltejs/kit").Config} */
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';


const isDev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	// kit: {
	// 	// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
	// 	// If your environment is not supported or you settled on a specific environment, switch out the adapter.
	// 	// See https://kit.svelte.dev/docs/adapters for more information about adapters.
	// 	adapter: adapter()
	// },
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: isDev ? "" : process.env.BASE_PATH,
			base: ""
		},
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	}
};

/* This is default, we do static for GH pages but lazy to go back in git so I leave comment for now
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

// /** @type {import('@sveltejs/kit').Config}
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

*/



// const config = {
// };

export default config;
