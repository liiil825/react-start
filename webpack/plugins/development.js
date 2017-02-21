const webpack = require('webpack')

module.exports = function({ isDev, isBrowser }) {
  const plugins = []

  if (isBrowser) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
  }
  plugins.push(
    new webpack.NamedModulesPlugin()
  )
  return plugins
}

