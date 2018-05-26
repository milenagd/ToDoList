const path = require('path');

module.exports = {
  app: path.resolve(__dirname, '../src/app'),
  components: path.resolve(__dirname, '../src/app/components'),
  commons: path.resolve(__dirname, '../src/app/commons'),
  actions: path.resolve(__dirname, '../src/app/actions'),
  reducers: path.resolve(__dirname, '../src/app/reducers'),
  icons: path.resolve(__dirname, '../src/app/icons'),
  constants: path.resolve(__dirname, '../src/app/constants'),
  static: path.join(__dirname, '../src/static'),
  dist: path.join(__dirname, '../src/dist'),
};
