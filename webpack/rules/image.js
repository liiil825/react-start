module.exports = function({ isDev }) {
  return [
    {
      test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'file',
        options: {
          name: isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
        },
      },
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|otf|webp|)(\?.*)?$/,

      use: {
        loader: 'file',
        options: {
          name: isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
        },
      },
    },
    // Disabling SVG Font Loading
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,

      use: 'null',

      include: /font-awesome/,
    },
  ]
}

