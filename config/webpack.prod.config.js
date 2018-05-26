const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const PATHS = require('./paths');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = () => ({
  mode: 'production',
  output: {
    path: PATHS.dist,
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.[hash].css',
      allChunks: true,
      disable: false,
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});

module.exports = env => webpackMerge(baseConfig(env), prodConfig(env));
