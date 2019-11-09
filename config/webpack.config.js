const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './entry/index.jsx',
    resolve: {
        alias: {
            "../../theme.config$": path.join(__dirname, '../semantic-ui-theme/theme.config')
        }
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader', 'less-loader'
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                loader: 'file-loader',
                options: {
                    limit: 5000,
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                test: [/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    /\.otf(\?.*)?$/
                ],
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: 'fonts/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./entry/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
};