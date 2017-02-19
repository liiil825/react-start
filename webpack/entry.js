const PATHS = require('./paths')
const { entryNames } = require('./vendor')

module.exports = function({ isDev = false } = {}) {
  const entry = Object.assign({}, entryNames)

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

  return entry
}
