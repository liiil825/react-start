const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssImport = require('postcss-import')
const postcssCssnext = require('postcss-cssnext')
const postcssReporter = require('postcss-reporter')
const PATHS = require('../paths')

module.exports = function({ isDev }) {
  const localIndentName = 'localIdentName=[name]__[local]___[hash:base64:5]'

  const createLoader = embedCssInBundle => ([
    {
      loader: embedCssInBundle ? 'css' : 'css-loader/locals',
      options: {
        localIndentName,
        sourceMap: true,
        modules: true,
        importLoaders: 1
      },
    },
    {
      loader: 'postcss',
      options: {
        plugins: [
          postcssImport({ path: resolve(PATHS.app, './css') }),
          postcssCssnext({ browsers: ['> 1%', 'last 2 versions'] }),
          postcssReporter({ clearMessages: true })
        ]
      }
    }
  ])

  const createBrowserLoaders = extractCssToFile => loaders => {
    if (extractCssToFile) {
      return ExtractTextPlugin.extract({
        fallback: 'style',
        use: loaders
      });
    }

    return ['style', ...loaders]
  }

  return {
    test: /\.css$/,

    use: createBrowserLoaders(!isDev)(createLoader(isDev)),
  }
}

