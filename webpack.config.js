const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        filename:'[name].js',
        path: path.join(__dirname ,"build2")
    },
    externals:[{

    }],
    module:{
        rules:[
            {
                test :/\.(tsx|ts|spec.tsx)$/,
                exclude: /node_modules/,
                loader :'awesome-typescript-loader',
                query:{
                    ignoreDiagnostics:[2339, 2307, 6143, 2551, 2345]
                }
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{"from":"./src/settings.js", "to":"settings.js"}])
    ]
}