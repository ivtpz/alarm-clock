var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    './src/index.js'
  ],
  watch: true,
  devtool: 'eval',
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:1337/',
        secure: false
      }
    }
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  plugins : [
      new webpack.HotModuleReplacementPlugin(),  
      new webpack.NoErrorsPlugin()
    ]
});