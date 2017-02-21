const javascript = require('./javascript')
const css = require('./css')
const image = require('./image')

module.exports = function({ isDev, isBrowser }) {
  const rules = []

  rules.push(
    ...javascript({ isDev, isBrowser })
  )
  if (isBrowser) {
    rules.push(
      ...css({ isDev, isBrowser }),
      ...image({ isDev, isBrowser })
    )
  }

  return rules
}

