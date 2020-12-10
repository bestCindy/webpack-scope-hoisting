const webpack = require('webpack');

module.exports = {
  plugins: [
    // 开启 Scope Hoisting
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
};