const { resolve } = require('path')

const pwd = resolve(__dirname, '../')

module.exports = {
  app: resolve(pwd, 'src'),
  dist: resolve(pwd, 'dist'),
}

