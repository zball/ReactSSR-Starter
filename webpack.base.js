module.exports = {
    // Tell Webpack to run Babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        [
                        '@babel/preset-env',
                            {
                                "useBuiltIns": "entry",
                                "corejs": "3.0.0",
                            }
                        ]
                    ]
                }
            }
        ]
    }
}