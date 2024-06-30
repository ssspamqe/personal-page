import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
export default {
    input: "src/comicScript.ts",
    output: {file: 'dist/bundle.js'},
    plugins: [typescript(), nodeResolve({browser:true}), terser()],

}