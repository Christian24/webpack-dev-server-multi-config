const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    mode: "development",
    output: {
        path: __dirname + '/dist',
        publicPath: '/login'
    },
    devServer: {
        proxy: {
          
          "/api": {
            target: "https://picsum.photos/",
            secure: false,
            "changeOrigin": true,
            pathRewrite: {"^/api" : ""},
          }
        }
      },
    
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})]
}