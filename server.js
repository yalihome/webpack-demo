const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);  //方法

console.log(compiler)

//所以到底给 app.use 传什么呢？
app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(3000, function(){
    console.log("Listening on port 3000!");
})
