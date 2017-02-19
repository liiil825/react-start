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
  ]

  if (isDev) {
    plugins.push(...devPlugin)
  } else {
    plugins.push(...prodPlugin)
  }

  return plugins
}
