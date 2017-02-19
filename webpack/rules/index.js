const javascript = require('./javascript')

module.exports = function({ isDev }) {
  return [
    javascript(),
  ]
}

