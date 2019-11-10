const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    resolve: {
        alias: {
            // renamed the internal semantic-ui import to use our semantic-ui-theme
            // this means we can override semantic-ui less variables
            "../../theme.config$": path.join(__dirname, 'semantic-ui-theme/theme.config')
        },
        extensions: ['.js', '.jsx']
    },
    // used to split our vender files and main files into smaller files
    // this will load the code as is needed allowing for a smaller bundle
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        // used to bundle all of our .js and .jsx files 
        // for chuck splitting later
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        // basic config to run the dev server
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    // used to convert our .js and .jsx files into readable
                    // js files for the browser after running it through babel
                    // transformations (ES6 and React)
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.less$/,
                // used to convert our imported less files into readable css files
                // and send them to our MiniCssExtractPlugin to gather into a
                // single .css file
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader', 'less-loader'
                ]
            },
            {
                // used to convert our imported image files and bundle them
                // under the images directory (files from semantic-ui)
                test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
                loader: 'file-loader',
                options: {
                    limit: 5000,
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                // used to convert our imported font files and convert them
                // into base64 uri's for loading from our CSS (files from semantic-ui)
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
        // used to generate an index html page that will automatically
        // contain the index.js file (react core) and css bundles
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        // used to bundle all of our css related content into a single file
        // for chuck splitting later
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
};