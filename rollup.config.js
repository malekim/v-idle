import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './build/vidle.min.js',
    format: 'cjs',
    name: 'vidle'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
