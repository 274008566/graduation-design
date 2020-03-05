const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {  
                test: /\.(woff|eot|ttf|svg|png|jpg|gif)$/,  
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {
                            esModule: false, // 这里设置为false
                            name: '[name].[ext]',
                            limit: 10240
                          }
                    },  
                ]  
            },
            {  
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [  
                    {  
                        loader: 'url-loader',  
                        options: {  
                            limit: '1024'  
                        }  
                    },  
                ]  
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { 
                        loader: 'css-loader',
                        options: { importLoaders: 1 } 
                    },
                    'less-loader'
                ]
            },
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader", "eslint-loader"],
                exclude:/node_modules/
            },
            {
                test:/.css$/,
                use:["style-loader","css-loader",'postcss-loader']
            },
            {
                test:/\.(js|jsx)$/,
                use:"babel-loader",
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
    ],
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        proxy: {
            "/api": {
              target: "http://192.168.140.144:8080/",
              pathRewrite: {"^/api" : ""}
            }
          }
    }
}
