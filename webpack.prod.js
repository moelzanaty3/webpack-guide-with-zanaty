const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // load in revers order
          MiniCssExtractPlugin.loader /*3. Extract css into files*/,
          'css-loader' /*2. Take your css and turn it into JS*/,
          'sass-loader' /*1. Turns sass into css*/
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            // https://webpack.js.org/loaders/html-loader/#esmodule
            // By default, html-loader generates JS modules that 
            // use the ES modules syntax. There are some cases in which using ES modules is beneficial, 
            // like in the case of module concatenation and tree shaking.
            esModule: false,
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[contenthash].[ext]',
            }
          }
        ]
      }
    ]
  },
   plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
}
