import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
    input: "comicScript.ts",
    output: {file: 'bundle.ts'},
    plugins: [typescript(), nodeResolve({browser:true}), terser()],

}