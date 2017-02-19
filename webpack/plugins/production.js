const webpack = require('webpack')
const { names } = require('../vendor')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    names,
  }),
  new webpack.optimize.UglifyJsPlugin({
  }),
  new ExtractTextPlugin('[name]-[hash:8].css'),
]

