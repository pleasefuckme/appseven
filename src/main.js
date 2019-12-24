import Vue from 'vue'
import VueRouter from "vue-router"
import store from './store/index.js'
import  VueResource  from 'vue-resource'
import axios from 'axios'
import App from './App.vue'




import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios

Vue.use(VueRouter);
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入根模板
import home from './components/home'

//引入路由配置信息
import routes from './router'

//定义一个VUE内全局用到的名称（标题）
Vue.prototype.appName = '工单系统';

//定义路由配置
const router = new VueRouter({
	hashbang: false,
//	history: true,
	routes: routes,
	scrollBehavior: function(to, from, savedPosition) {
		return {
			"x": 0,
			"y": 0
		}
	}
});
//添加路由钩子修改每个页面标题
router.beforeEach((to, form, next) => {
//如果自定义了标题就取标题，否则拿全局标题
window.document.title = to.meta.title !== undefined ? (to.meta.title + '-' + Vue.prototype.appName) : Vue.prototype.appName;
next()
});

//通过components下的index.js文件导入组件
import components from './components/index'
//对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
	Vue.component(key, components[key])
});

//通过filters.js导入自定义用于过滤的函数
import filters from './config/filters'
//对导入的函数进行全局过滤器注册
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
});

//methods.js导入自定义方法(/变量)用于全局方法
import methods from './config/methods'
//方法挂靠全局
Object.keys(methods).forEach((key) => {
	Vue.prototype[key] = methods[key];
});

const app = new Vue({
	router,
	store,
	render: h => h(home)
}).$mount('#app');

import Qs from 'qs'


Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//POST传参序列化
axios.interceptors.request.use((config)=>{
	  if (config.method === 'get') {

        var querystring = require('querystring');

        config.data = querystring.encode(config.data);

    }
	    if (config.method === 'post') {

        var querystring = require('querystring');

        config.data = querystring.encode(config.data);

    }
	return config;
},(error) =>{
	alert("错误的传参");
	return Promise.reject(error);
});
axios.interceptors.response.use(
    response => {
      if(response.data.code === 500) {
        if (response.data.msg === '请先登录') {
          router.push({
            path: '/login',
            query: {redirect: router.history.current.fullPath}
          })
          //如果需要可以在这里将 vuex 里的 user 改为空对象
        }
      //显示错误信息
      return Promise.reject(response.data)
    }

    if(response.data.code === 0){
      return response;
    }
}, error => {
    //显示错误信息
    return Promise.reject(error.response.data)
});


router.beforeEach((to, from, next) => {
  let user = router.app.$options.store.state.user;
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (JSON.stringify(user) === '{}') {
      next();
      router.push({ path: '/login',query: { redirect: to.fullPath }})
    }else {
      next()
    }
  } else {
    next()
  }
});

//qs.stringify() //转换成查询字符串
//let comments = {content: this.inputValue}
//let comValue = qs.stringify(comments)
//qs.parse() //转换成json对象
//let comValue = qs.parse(comments)
//request.interceptors.request.use((request) => {
//
//request.body = qs.stringify(request.body)
//
//wx.showLoading({ title: '拼命加载中...' })
//
//return request
//
//})

Vue.config.productionTip = false
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App ,Container },
  template: '<App/>'
})
