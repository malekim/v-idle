// rollup.config.ts
import typescript from '@rollup/plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import tsconfig from './tsconfig.json'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/vidle.min.js',
    format: 'cjs',
    name: 'vidle',
  },
  external: ['@vue/composition-api'],
  plugins: [
    commonjs({
      sourceMap: true,
    }),
    typescript({
      ...tsconfig.compilerOptions,
      include: '**/*.{js,ts}',
    }),
    uglify(),
  ],
}
