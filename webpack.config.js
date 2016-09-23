var webpack = require("webpack");

module.exports = {
    entry: "./entry.js",

    output: {
        path: __dirname,
        filename: "./src/app/build.js"
    },

    cache: true,

    devtool: "source-map",
    
    module: {
        loaders: [
            {
                loaders: ["style", "css"],
                test: /\.css$/,
                exclude: /node_modules/
            },

            {
                loaders: ["style", "css", "sass"],
                test: /\.scss$/,
                exclude: /node_modules/
            },

            { 
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    },

    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};
