import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = './src/index.ts';

// eslint-disable-next-line tsdoc/syntax
/** @type {import('rollup').RollupOptions} */
export default [
  // UMD
  {
    input,
    plugins: [
      cleaner({ targets: ['./dist', './docs'] }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
      }),
      alias({
        entries: { find: '~', replacement: './src' }
      }),
      terser()
    ],
    output: {
      name: 'ecs',
      file: pkg.main,
      format: 'umd',
      exports: 'named',
      sourcemap: true
    }
  },
  // ESM
  {
    input,
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
      }),
      alias({
        entries: { find: '~', replacement: './src' }
      }),
    ],
    output: {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  }
];