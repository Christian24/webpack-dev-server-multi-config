const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    mode: "development",
    output: {
        path: __dirname + '/dist',
        publicPath: '/login'
    },
    
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})]
}