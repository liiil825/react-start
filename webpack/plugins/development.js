const webpack = require('webpack')

module.exports = function({ isBrowser }) {
  const plugins = []

  if (isBrowser) {
    plugins.push(
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    )
  }
  return plugins
}

