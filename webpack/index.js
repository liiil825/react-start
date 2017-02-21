const PATHS = require('./paths')
const getPlugins = require('./plugins')
const getRules = require('./rules')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const getEntry = require('./entry')
const getCommon = require('./common')

module.exports = function(env) {
  const isDev = process.env.NODE_ENV !== 'production'
  const isBrowser = env === 'browser'
  process.env.DEBUG = isDev

  // eslint-disable-next-line
  console.log(`webpack start isDev:${isDev} isBrowser: ${isBrowser} env: ${env}`)

  const plugins = getPlugins({ isDev, isBrowser })
  const rules = getRules({ isDev, isBrowser })
  const entry = getEntry({ isDev, isBrowser })
  let config = getCommon({ isDev, isBrowser })

  config = Object.assign({}, {
    entry,

    output: {
      filename: '[name].[hash:8].js',
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
  }, config)

  if (isDev) {
    config = Object.assign({}, config, devConfig)
  } else {
    config = Object.assign({}, config, prodConfig)
  }
  return config
}

