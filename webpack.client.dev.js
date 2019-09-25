const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.client.js');

const config = {    
    mode: 'development'
};

module.exports = merge(baseConfig, config);