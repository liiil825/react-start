/* eslint-disable */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./create-store.prod')
} else {
  module.exports = require('./create-store.dev')
}
