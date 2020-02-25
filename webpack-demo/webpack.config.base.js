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
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/,
                loader:[ 'style-loader','css-loader','less-loader'] // 将 Less 编译为 CSS
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                    loader:"sass-loader",
                    options:{
                        implementation:require("dart-sass")}
                    }
                    // 'sass-loader'
                ],
            },
        ],
    },
};