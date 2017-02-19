module.exports = function() {
  return {
    test: /\.jsx?$/,

    use: ['babel-loader'],

    exclude: /node_modules/,
  }
}

