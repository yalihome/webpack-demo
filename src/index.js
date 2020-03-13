// import Vue from "vue";
// import VueRouter from "vue-router";
// import print from "./print.js";

//这样引入 less 生效了，那是不是可以定义组件的时候也这么干
// import "../common/common.less";
// import routes from "./routes.js";

console.log("here");
// const router = new VueRouter({
//     routes
// });
//为什么server出来了之后vue挂载执行不了？
// (new Vue({
//     el: "#app",
//     data: {
//         test: "hello"
//     },
//     mounted: function () {
//         test();
//     }
// }));
// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);

//     return element;
//   }

//   document.body.appendChild(component());


// if(module.hot){
//     module.hot.accpet("./print.js", function(){
//         console.log("accept print module.");
//         print("I am from print.js");
//     });
// }

import {cube} from "./math.js";
import _ from "loadsh";

function component(){
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    // var element = document.createElement('pre');
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = e=> import(/* webpackChunkName: 'print' */'./print.js').then(module=>{
        var print = module.default;
        print("我执行啦");
    });
    // element.innerHTML = _.join([
    //     'Hello webpack!',
    //     '5 cubed is equal to ' + cube(5)
    //     ]);
    return element;
}

document.body.appendChild(component());
