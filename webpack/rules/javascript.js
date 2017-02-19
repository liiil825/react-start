const PATHS = require('../paths')

module.exports = function() {
  return [
    {
      test: /\.jsx?$/,

      use: ['babel-loader'],

      include: PATHS.app,
      exclude: /node_modules/,
    },
    {
      test: /\.jsx?$/,
      enforce: 'pre',

      loader: 'eslint',

      include: PATHS.app,
    },
  ]
}

