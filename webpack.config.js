var Webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].js",
        publicPath: '/dist/'
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    module: {
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            //css
            {
                test: /\.css$/,
                loader: "style!css"
            },
            //url
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192&name=./[name].[ext]"
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: { // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
        extensions: ['', '.js', '.vue', '.json', '.coffee']
    }
}
