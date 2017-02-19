const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const { names } = require('../vendor')

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    names,
  }),
  new webpack.optimize.UglifyJsPlugin({
  }),
  new ExtractTextPlugin('[name]-[hash:8].css'),
]

