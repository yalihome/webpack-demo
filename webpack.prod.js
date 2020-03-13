import { CleanWebpackPlugin } from "clean-webpack-plugin";

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    "plugins": [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env.ENV_NODE": JSON.stringify("production")
        })
    ]
});