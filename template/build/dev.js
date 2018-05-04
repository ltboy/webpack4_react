'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const config = require('./config.js')
// const utils = require('./utils.js')
const baseConfig = require('./base.js')

const HOST = 'localhost'
const PORT = 8081
module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${HOST}:${PORT}`],
        clearConsole: true
      }
    })
  ],
  // server
  devServer: {
    hot: true,
    // 配置webpack编译好的静态文件
    publicPath: config.publicPath,
    // 配置的是那些不经过webpack编译的静态文件
    contentBase: 'dist',
    compress: true,
    host: '0.0.0.0',  // 设置为0.0.0.0可以通过ip访问
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    quiet: true,
    watchOptions: {
      poll: true
    }
  }
})
