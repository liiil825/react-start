const javascript = require('./javascript')
const css = require('./css')
const image = require('./image')

module.exports = function({ isDev }) {
  return [
    ...javascript({ isDev }),
    ...css({ isDev }),
    ...image({ isDev }),
  ]
}

