const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssImport = require('postcss-import')
const postcssCssnext = require('postcss-cssnext')
const postcssReporter = require('postcss-reporter')

const PATHS = require('../paths')
const stylelint = require('stylelint')

module.exports = function({ isDev }) {
  const localIndentName = isDev ? 'localIdentName=[name]__[local]___[hash:base64:5]' : '[hash:8]'

  const createLoader = (embedCssInBundle, modules = true) => {
    const loaders = [
      {
        loader: embedCssInBundle ? 'css' : 'css',
        options: {
          localIndentName,
          sourceMap: true,
          modules,
          importLoaders: 1,
        },
      },
    ]

    if (modules) {
      loaders.push(
        {
          loader: 'postcss',
          options: {
            plugins: [
              postcssImport({
                path: [
                  resolve(PATHS.app, './css'),
                ],
              }),
              postcssCssnext({ browsers: ['> 1%', 'last 2 versions'] }),
              postcssReporter({ clearMessages: true }),
            ],
          },
        // eslint-disable-next-line
        }
      )
    }

    return loaders
  }


  const createBrowserLoaders
    = extractCssToFile => (loaders) => {
      if (extractCssToFile) {
        return ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: loaders,
        })
      }

      return ['style', ...loaders]
    }

  return [
    {
      test: /\.css$/,

      use: createBrowserLoaders(!isDev)(createLoader(isDev)),

      include: PATHS.app,
    },
    {
      test: /\.css$/,
      enforce: 'pre',

      loader: 'postcss',
      options: {
        plugins: () => ([
          stylelint({
            ignoreFiles: 'node_modules/**/*.css',
          }),
        ]),
      },
    },
    // for font-awesome
    {
      test: /\.css$/,

      use: createBrowserLoaders(!isDev)(createLoader(isDev, false)),

      include: /font-awesome/,
    },
  ]
}

