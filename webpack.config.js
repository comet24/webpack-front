const Dotenv = require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config ={
    entry: process.env.ENTRY,
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },

                ], // compiles Scss to CSS
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }
            },
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader',
                options: {
                    configFile : process.env.NODE_ENV=="development" ? "tsconfig.dev.json"  : 'tsconfig.prod.json',
                }
            },
        ],
    },


    // dev tool

    mode : process.env.NODE_ENV,
    devtool : process.env.NODE_ENV=="development" ? "eval"  : false,
    watch: process.env.NODE_ENV=="development" ? true : false,

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true,
        contentBase: '/',
        historyApiFallback: true,
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './src/html/index.html'
        }),
    ],

    resolve: {
        alias: {
            Comp: path.resolve(__dirname, 'src/js/components/')
        },

        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }


}

module.exports = config