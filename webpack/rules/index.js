const javascript = require('./javascript')
const css = require('./css')

module.exports = function({ isDev }) {
  return [
    ...javascript({ isDev }),
    ...css({ isDev }),
  ]
}

