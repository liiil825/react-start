const webpack = require('webpack')
const { names } = require('../vendor')

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    names,
  }),
  new webpack.optimize.UglifyJsPlugin(),
]

