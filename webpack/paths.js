const { resolve } = require('path')

const pwd = process.cwd()

module.exports = {
  pwd,
  app: resolve(pwd, 'src'),
  config: resolve(pwd, 'config'),
  build: resolve(pwd, 'dist'),
  server: resolve(pwd, 'src', 'server'),
  modules: resolve(pwd, 'node_modules'),
}

