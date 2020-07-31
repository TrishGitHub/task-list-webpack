const path = require('path');
const HtmlWebpackPliugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPliugin({
            template: 'public/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/assets', to: 'assets' },
            ],
        }),
    ]
};

