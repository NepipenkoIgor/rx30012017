/**
 * Created by igornepipenko on 2/13/17.
 */
module.exports = {
  entry: './class-work.ts',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {test: /\.ts?$/, loader: 'awesome-typescript-loader'}
    ]
  }
}