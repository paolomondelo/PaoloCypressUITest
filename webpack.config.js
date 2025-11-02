const preprocessor = require('@cypress/webpack-preprocessor');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json', '.feature'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};