const PATHS = require('./paths')
const getPlugins = require('./plugins')

module.exports = function(env) {
  const isDev = env !== 'production'

  const plugins = getPlugins({ isDev })

  const config = {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:3000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      PATHS.app,
      // the entry point of our app
    ],

    output: {
      filename: '[name].js',
      // the output bundle

      path: PATHS.build,

      // necessary for HMR to know where to load the hot update chunks
    },

    devtool: 'inline-source-map',

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/,
        },
      ],
    },

    plugins,

    devServer: {
      host: 'localhost',
      port: 3000,

      historyApiFallback: true,
      // respond to 404s with index.html

      hot: true,
      // enable HMR on the server
    },
  }
  return config
}

