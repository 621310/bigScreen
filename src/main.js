import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import dataV from '@jiaminghi/data-view'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import wlGantt from 'wl-gantt'
import "wl-gantt/lib/wl-gantt.css"

Vue.use(wlGantt)

Vue.use(dataV)

Vue.use(ElementUI);


Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
