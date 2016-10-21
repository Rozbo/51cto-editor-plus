//es6语法：
import Vue from "vue"; //其实不用写完，会自动查找。
//import Router from 'vue-router'
//外部引入别的库都可以用这样的方式，比如jquery等。。
//引入我们编写的测试用vue文件。
import app from './leaks/app';



//Vue.config.debug = true; //开启错误提示
new Vue(app);
