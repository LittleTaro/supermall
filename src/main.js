import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 默认导入index文件
import toast from 'components/common/toast'



// 安装toast插件(本质是调用toast对象的install)
Vue.use(toast)
Vue.use(VueLazyLoad)

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


// 解决移动端300ms延迟的问题
FastClick.attach(document.body)

