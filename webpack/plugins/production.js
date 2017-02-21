const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const {
  clicentNames,
  serverNames,
} = require('../vendor')

module.exports = function({ isDev, isBrowser }) {
  const plugins = []

  if (isBrowser) {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: clicentNames,
      }),
      new ExtractTextPlugin(
        '[name]-[hash:8].css'
      )
    )
  } else {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: serverNames,
      })
    )
  }
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
  )
  return plugins
}

