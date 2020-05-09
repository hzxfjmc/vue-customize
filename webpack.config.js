var path = require('path');
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: ['babel-polyfill','./src/main.js'], // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
    // devtool: '#eval-source-map',
    output: {
        path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
        filename: 'build.js' // 打包后的文件名
    },
    optimization: {
        // minimizer: [
        //     new UglifyJsPlugin({
        //       test: /\.js(\?.*)?$/i,
        //     }),
        //   ],
        // nodeEnv:'production'
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins:[
        new CleanWebpackPlugin(), // ['dist'] 匹配删除的文件
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ],
        
    }
};

