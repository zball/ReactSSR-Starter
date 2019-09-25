const merge = require('webpack-merge');
const baseConfig = require('./webpack.client.js');
const TerserPlugin = require('terser-webpack-plugin');

const config = {    
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
};

module.exports = merge(baseConfig, config);