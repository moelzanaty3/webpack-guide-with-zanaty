const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  // if we need to remove minification from the code
  mode: 'development',
  // This option controls if and how source maps are generated.
  // eval - Each module is executed with eval() and //@ sourceURL.
  // This is pretty fast. The main disadvantage is that it doesn't
  // display line numbers correctly since it gets mapped to transpiled code
  // instead of the original code (No Source Maps from Loaders).
  devtool: false,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // load in revers order
          'style-loader' /*3. Inject CSS into the DOM.*/,
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
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
