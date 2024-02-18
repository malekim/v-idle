// rollup.config.ts
import { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import { dts } from 'rollup-plugin-dts'

import { readFileSync } from 'fs'
const tsconfig = JSON.parse(readFileSync('./tsconfig.json').toString())

const config: RollupOptions[] = [
  {
    external: ['vue'],
    input: 'src/index.ts',
    output: {
      file: 'build/vidle.min.js',
      name: 'vidle',
      format: 'es',
    },
    plugins: [
      commonjs({
        sourceMap: true,
      }),
      typescript({
        ...tsconfig.compilerOptions,
        include: '**/*.{js,ts}',
      }),
      terser(),
    ],
  },
  {
    external: ['vue'],
    input: 'src/index.ts',
    output: {
      file: 'build/vidle.min.cjs',
      name: 'vidle',
      exports: 'named',
      format: 'cjs',
    },
    plugins: [
      commonjs({
        sourceMap: true,
      }),
      typescript({
        ...tsconfig.compilerOptions,
        include: '**/*.{js,ts}',
      }),
      terser(),
    ],
  },
  {
    // path to your declaration files root
    input: './src/index.ts',
    output: [
      {
        file: './build/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
]

export default config
