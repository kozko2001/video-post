const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distFolder = 'dist';

module.exports = {
  entry: './src/index.jsx',
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
      title: 'Video Post',
      template: './src/index.ejs',
    }),
    new CleanWebpackPlugin([distFolder]),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  }
};
