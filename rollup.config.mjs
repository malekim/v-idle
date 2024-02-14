// rollup.config.ts
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import tsconfig from './tsconfig.json' assert { type: 'json' }

export default {
  external: ['vue'],
  input: 'src/index.ts',
  output: {
    file: 'build/vidle.min.js',
    format: 'cjs',
    name: 'vidle',
  },
  plugins: [
    commonjs({
      sourceMap: true,
    }),
    typescript({
      ...tsconfig.compilerOptions,
      include: '**/*.{js,ts}',
    }),
    terser()
  ],
}
