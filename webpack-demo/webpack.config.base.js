const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        // 打包.html文件
        new HtmlWebpackPlugin({
            title: 'lxy app',
            template: 'src/assets/index.html'
        })
    ]
};