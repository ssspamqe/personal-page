import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        // paths: {
        //     base: process.argv.includes('dev')
        //         ? ''
        //         : '/personal-page.github.io',
        // },
    },
}

export default config
