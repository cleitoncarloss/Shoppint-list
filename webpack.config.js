const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(?<ext>ico|png|svg|jpg|jpeg|gif|mp4|ogg|webm|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]'
            }
          }
        ],
        exclude: '/node_modules/'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/home/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/header/style.css', to: 'css' },
        { from: './src/home/home.css', to: 'css' },
        { from: './src/css/reset.css', to: 'css' },
        { from: './src/css/colors.css', to: 'css' },
      ]
    }) 
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets/'),
    },
  },
  experiments: {
    topLevelAwait: true,
  }
}
