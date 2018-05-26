const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const PATHS = require('./paths');

const DEV_SERVER_PORT = '8000';

const devConfig = () => ({
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: PATHS.static,
    filename: 'bundle.js',
    publicPath: `http://localhost:${DEV_SERVER_PORT}/static/`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
      disable: true,
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
    noInfo: false,
    host: '0.0.0.0',
    port: DEV_SERVER_PORT,
    historyApiFallback: true,
    contentBase: PATHS.static,
  },
});

module.exports = env => webpackMerge(baseConfig(env), devConfig(env));
