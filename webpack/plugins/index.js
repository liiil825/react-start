const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const template = require('html-webpack-template')

const getDev = require('./development.js')
const getProd = require('./production.js')

module.exports = function({ isDev, isBrowser }) {
  const plugins = []

  if (isBrowser) {
    plugins.push(
      new HtmlWebpackPlugin({
        template,
        title: 'react hot replace demo',
        appMountId: 'root',
        inject: false,
      })
    )
  }
  plugins.push(
    new webpack.EnvironmentPlugin(
      ['NODE_ENV', 'DEBUG'])
  )

  if (isDev) {
    plugins.push(...getDev({ isBrowser }))
  } else {
    plugins.push(...getProd({ isBrowser }))
  }

  return plugins
}
