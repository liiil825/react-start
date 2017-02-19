const { resolve } = require('path')

const pwd = resolve(__dirname, '../')

module.exports = {
  pwd,
  app: resolve(pwd, 'src'),
  build: resolve(pwd, 'dist'),
}

