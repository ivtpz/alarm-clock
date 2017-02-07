var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  devtool: 'source-map',
  plugins : [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }),
    ]
});