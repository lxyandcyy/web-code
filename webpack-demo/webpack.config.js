const base =require('./webpack.config.base')

module.exports = {
    ...base,
    devServer: {
        contentBase: './dist'
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader'],
            },
        ],
    },

};