const PATHS = require('../paths')

module.exports = function({ isDev, isBrowser }) {
  return [
    {
      test: /\.jsx?$/,

      loader: 'babel',
      query: {
        presets: [
          [
            'es2015',
            {
              modules: false,
            },
          ],
          'stage-0',
          'react',
        ],
        plugins:
          (isDev && isBrowser ) ? [
            'react-hot-loader/babel',
            'syntax-dynamic-import',
          ] : ['syntax-dynamic-import'],
      },

      include: PATHS.app,
      exclude: /node_modules/,
    },
    {
      test: /\.jsx?$/,
      enforce: 'pre',

      loader: 'eslint',

      include: PATHS.app,
    },
  ]
}
