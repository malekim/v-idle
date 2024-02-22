// rollup.config.ts
import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import { dts } from 'rollup-plugin-dts'

import { readFileSync } from 'fs'
const tsconfig = JSON.parse(readFileSync('./tsconfig.json').toString())

const config: RollupOptions[] = [
  {
    external: ['vue-demi'],
    input: 'src/index.ts',
    output: [
      {
        globals: {
          'vue-demi': 'VueDemi',
        },
        file: 'build/vidle.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        globals: {
          'vue-demi': 'VueDemi',
        },
        file: 'build/vidle.esm.min.js',
        format: 'esm',
        plugins: [terser()],
        sourcemap: true,
      },
      {
        globals: {
          'vue-demi': 'VueDemi',
        },
        file: 'build/vidle.umd.js',
        format: 'umd',
        name: 'v-idle',
        sourcemap: true,
      },
      {
        globals: {
          'vue-demi': 'VueDemi',
        },
        file: 'build/vidle.umd.min.js',
        format: 'umd',
        name: 'v-idle',
        plugins: [terser()],
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        ...tsconfig.compilerOptions,
        include: '**/*.{js,ts}',
      }),
    ],
  },
  {
    // path to your declaration files root
    input: './src/index.ts',
    output: [
      {
        file: './build/index.d.ts',
      },
    ],
    plugins: [dts()],
  },
]

export default config
