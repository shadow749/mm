import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'

// 全局性的写到这里
Vue.config.productionTip = false
// 将 axios 添加到vue里，用this来引用
Vue.prototype.axios = axios

// 设置一个全局过滤器 读取图片的地址是动态的，可以动态更改图片的长宽
// url ： 图片地址
// args : 传入的参数
Vue.filter('setWH', (url, arg) => {
  // 将url地址里 字符串 ‘w.h’ 替换为参数里的长宽  .在正则里是通配符，需要进行转义所以加了斜线
  return url.replace(/w\.h/, arg)
})
Vue.component('Loading', Loading)
Vue.component('Scroller', Scroller)// 将滑动插件做成全局组件，方便其他页面调用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
