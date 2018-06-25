//var path = require("path");
//module.exports = {
//    entry: [
//        "babel-polyfill",
//        "./Scripts/main"
////    ],
//    output: {
//        publicPath: "/js/",
//        path: path.join(__dirname, "/wwwroot/js/"),
//        filename: "main.build.js"
//    },
//    module: {
//        loaders: [{
//            exclude: /node_modules/,
//            loader: "babel-loader",
//            query: {
//                presets: ["es2016", "stage-1"]
//            }
//        }]
//    },
//};

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:13540'
        })
    }
}