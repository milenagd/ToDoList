const webpack = require('webpack');
const PATHS = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => ({
  entry: [`${PATHS.app}`],
  resolve: {
    modules: ['node_modules'],
    alias: {
      app: PATHS.app,
      components: PATHS.components,
      commons: PATHS.commons,
      actions: PATHS.actions,
      reducers: PATHS.reducers,
      constants: PATHS.constants,
      icons: PATHS.icons,
      dist: PATHS.dist,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
});
