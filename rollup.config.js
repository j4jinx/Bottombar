import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';


import pkg from './package.json';


export default {
	input: 'src/index.jsx',
	output: [
		{ file: pkg.main, format: 'cjs', exports: 'default' },
		{ file: pkg.module, format: 'esm', exports: 'default', }
	],
	plugins: [
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
			presets: ['@babel/preset-env', '@babel/preset-react']
		}),
		resolve(),
		commonjs(),
		terser()
	],
	external: Object.keys(pkg.peerDependencies)
};