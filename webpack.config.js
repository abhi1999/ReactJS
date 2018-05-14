const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const rootSrc = path.resolve(__dirname, './src');

module.exports={
    devtool:'inline-source-map', 
    devServer:{
        port:9001,
        proxy:{
            '/api/v1':{
                target:'http://localhost:9002/api',
                pathRewrite:{'^/api/v1':''}
            }
        }
    },
    entry:{
        app:'./src/index.tsx'
    },
    output:{
        filename:'[name].[hash].js',
        path: __dirname +"/build"
    },
    external:{

    },
    module:{
        loaders:[
            {
                test :/\.(tsx|ts)$/,
                exclude: /node_modules/,
                loader :'awesome-typescript-loader'
            },
            {
                test:/\.(scss|sass|css)$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    user:['css-loader', 'sass-loader']
                })
            },
            {   
                test :/\.(png|jpg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
    }, 
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new extractTextPlugin({
            filename:'[name].css'
        }),
        new copyWebpackPlugin([
            {from: './src/settings.js', to: 'settings.js'}
        ])
    ]
}