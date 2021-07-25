const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
output: {
path: path.join(__dirname, '/dist'),
filename: 'index.bundle.js'
},
devServer: {
    port: 3000,
    watchContentBase: true
    },
// Описываем правила
module: {
    rules: [
    {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
    loader: 'babel-loader'
    }
    },
    {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
    }
    ]
    }
}
