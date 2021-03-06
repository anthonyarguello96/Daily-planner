module.exports = {
  mode: 'development',
  output: {
    filename: 'all.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/preset-env', {targets: 'defaults'}],
          ],
        },
      },
    ],
  },
};
