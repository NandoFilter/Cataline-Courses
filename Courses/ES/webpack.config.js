const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/14_Practing/main.js')],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: './public',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ title: 'Development' }),
  ],
}