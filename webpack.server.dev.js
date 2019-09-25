const merge = require('webpack-merge');
const baseConfig = require('./webpack.server.js');

const config = {
    mode: 'development'
};

module.exports = merge(baseConfig, config);