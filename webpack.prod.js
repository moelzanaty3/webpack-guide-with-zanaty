const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  // load in revers order
                  'style-loader', /*3. Inject CSS into the DOM.*/
                  'css-loader', /*2. Take your css and turn it into JS*/
                  'sass-loader'/*1. Turns sass into css*/
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

}