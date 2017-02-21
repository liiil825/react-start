const { resolve } = require('path')

const PATHS = require('./paths')
const externals = require('./externals')

module.exports = function({ isBrowser }) {
  const config = {
    resolve: {
      alias: {
        CONFIG$: PATHS.config,
        environment$: resolve(PATHS.config, 'environment.js'),
      },
      modules:
        isBrowser ? [PATHS.app, PATHS.modules]
        : [PATHS.server, PATHS.modules],
      extensions: ['.js', '.jsx', '.css'],
    },
  }

  if (!isBrowser) {
    config.externals = externals
  }

  return config
}

