const PATHS = require('./paths')
const getPlugins = require('./plugins')
const getRules = require('./rules')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const { entry } = require('./vendor')

module.exports = function(env) {
  const isDev = env !== 'production'
  console.log(`webpack start isDev:${isDev} env: ${env}`)

  const plugins = getPlugins({ isDev })
  const rules = getRules({ isDev })
  console.log(rules[1])

  if (isDev) {
    entry.app = [
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
    ]
  } else {
    entry.app = PATHS.app
  }

  let config = {
    entry,

    output: {
      filename: '[name].js',
      // the output bundle

      path: PATHS.build,

      // necessary for HMR to know where to load the hot update chunks
    },

    module: {
      rules,
    },

    plugins,

    resolveLoader: {
      moduleExtensions: ["-loader"],
    },
  }
  if (isDev) {
    config = Object.assign({}, config, devConfig)
  } else {
    config = Object.assign({}, config, prodConfig)
  }
  return config
}

