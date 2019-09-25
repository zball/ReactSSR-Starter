const merge = require('webpack-merge');
const baseConfig = require('./webpack.server.js');

const config = {
    mode: 'production'
};

module.exports = merge(baseConfig, config);