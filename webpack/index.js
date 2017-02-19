const PATHS = require('./paths')
const getPlugins = require('./plugins')
const getRules = require('./rules')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const getEntry = require('./entry')

module.exports = function(env) {
  const isDev = env !== 'production'
  // eslint-disable-next-line
  console.log(`webpack start isDev:${isDev} env: ${env}`)

  const plugins = getPlugins({ isDev })
  const rules = getRules({ isDev })
  const entry = getEntry({ isDev })

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
      moduleExtensions: ['-loader'],
    },
  }
  if (isDev) {
    config = Object.assign({}, config, devConfig)
  } else {
    config = Object.assign({}, config, prodConfig)
  }
  return config
}

