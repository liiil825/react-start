const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devPlugin = require('./development.js')
const prodPlugin = require('./production.js')

module.exports = function({ isDev }) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: 'react hot replace demo',
      appMountId: 'root',
      inject: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
      __DEV__: isDev,
    }),
  ]

  if (isDev) {
    plugins.push(...devPlugin)
  } else {
    plugins.push(...prodPlugin)
  }

  return plugins
}
