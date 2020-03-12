import Vue from "vue";

//这样引入 less 生效了，那是不是可以定义组件的时候也这么干
import "../common/common.less";  
import test from "./test.js";

console.log("here");
document.oncontentdomready = function(){
//为什么server出来了之后vue挂载执行不了？
(new Vue({
    el:"#app",
    data: {
        test: "hello"
    },
    mounted: function(){
        test();
    }
}));
}