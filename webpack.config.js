const webpack         = require('webpack');
const {merge}         = require('webpack-merge');
const path            = require('path');
const commonConfig    = require('./webpack.common.js');
const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT;

module.exports = merge(commonConfig, {
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: true,
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    allowedHosts: 'all',
    open: false,
    port: DEV_SERVER_PORT,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
});
