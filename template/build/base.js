'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const utils = require('./utils.js')
const config = require('./config.js')

module.exports = {
  entry: './src/index.js',
  output: {
    path: utils.resolve('dist'),
    filename: config.assetsSubDirectory + '/js/[name]_[hash:6].js',
    publicPath: config.publicPath
  },
  resolve: {
    alias: {
      '@': utils.resolve('src')
    },
    extensions: ['.js', '.jsx', '.css', 'scss'],
    modules: ['node_modules'],
    mainFiles: ['index']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [utils.resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.jsx?$/,
        include: [utils.resolve('src')],
        loader: 'babel-loader',
        exclude: ['node_modules']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resolve('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resolve('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.resolve('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }
    }),
    CopyWebpackPlugin([
      {
        from: 'public',
        to: 'static/',
        ignore: ['.*', 'favicon.ico', 'index.html']
      }, // 顾名思义，from 配置来源，to 配置目标路径
      {
        from: 'public/favicon.ico',
        to: 'favicon.ico'
      }
    ])
  ]
}
