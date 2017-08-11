const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distFolder = 'dist';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `./${distFolder}`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Video Post'
    }),
    new CleanWebpackPlugin([distFolder]),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  }
};
