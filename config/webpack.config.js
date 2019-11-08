const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './entry/index.jsx',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./entry/index.html",
            filename: "./index.html"
        })
    ]
};