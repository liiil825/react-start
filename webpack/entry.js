const PATHS = require('./paths')
const { clientEntryNames, serverEntryNames } = require('./vendor')

module.exports = function({
  isDev = false,
  isBrowser = false,
} = {}) {
  let entry = {}
  if (isBrowser) {
    entry = Object.assign({}, clientEntryNames)
  } else {
    entry = Object.assign({}, serverEntryNames)
  }

  if (isDev && isBrowser) {
    entry.app = [
      'babel-polyfill',

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
  } else if (!isBrowser) {
    entry.server = ['babel-polyfill', PATHS.server]
  } else {
    entry.app = ['babel-polyfill', PATHS.app]
  }

  return entry
}
