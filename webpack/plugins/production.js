const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const {
  clicentNames,
  serverNames,
} = require('../vendor')

module.exports = function({ isBrowser }) {
  const plugins = []

  if (isBrowser) {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: clicentNames,
      }),
      new ExtractTextPlugin(
        '[name]-[hash:8].css'
      ),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
      )
  } else if (serverNames.length) {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        names: serverNames,
      })
    )
  }
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
  return plugins
}

