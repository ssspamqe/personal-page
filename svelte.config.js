import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            "strict": false,
        }),
        // paths: {
        //     base: process.argv.includes('dev')
        //         ? ''
        //         : '/personal-page.github.io',
        // },
    },
}

export default config
