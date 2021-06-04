const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileLoader = require('file-loader');

module.exports = {
    entry: './src/assets/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {},
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: './src/assets/css', to: 'css'}]
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000
    }
}