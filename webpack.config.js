const path = require("path");
//用于重新生成 index.html 来覆盖旧的 index.html
const HtmlWebpackPlugin = require("html-webpack-plugin");
//clean 插件好像并没有生效啊，旧的入口文件还是没有清除
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    "entry": {
        app: "./src/index.js"
    },
    "output":{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"./dist"),
        publicPath: "/"
    },
    "plugins": [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        new HtmlWebpackPlugin({
            title: "production",
            template: "./index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    "devtool": "inline-source-map",
    "devServer": {
        "contentBase": "./dist",
        "hot": true
    },
    "module": {
        "rules": [
            {
                test: /\.less$/,  //编译为css后导入到对应的js文件中
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.tpl$/,  //编译为css后导入到对应的js文件中
                use:["html-loader"]
            }
        ]
    },
    "resolve": {
        "alias": {
            "vue$": "vue/dist/vue.esm.js"  //vue 结尾的代码，坑爹啊，js结尾的呢
        }
    }
}