// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages serves public/<folder>/<name>/index.html at /<folder>/<name>/.
// The dev server doesn't, so rewrite folder URLs to their index.html.
/** @type {import('vite').Plugin} */
const publicFolderIndex = {
	name: 'public-folder-index',
	enforce: 'pre',
	configureServer(server) {
		server.middlewares.use((req, _res, next) => {
			const path = req.url?.split('?')[0];
			if (path?.endsWith('/') && path !== '/' && existsSync(`public${path}index.html`)) {
				req.url = `${path}index.html`;
			}
			next();
		});
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://jriesgo-05.github.io',
	integrations: [mdx(), sitemap()],
	vite: { plugins: [publicFolderIndex] },
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Instrument Serif',
			cssVariable: '--font-serif',
			weights: [400],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Instrument Sans',
			cssVariable: '--font-sans',
			weights: [400, 500],
			styles: ['normal'],
			fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
		},
	],
});
