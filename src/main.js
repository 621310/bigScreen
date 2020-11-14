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

import animated from 'animate.css'

import AMap from "vue-amap";
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: "f5ccd90e4473729b8717ffb5d4e0651a",
  plugin: ["AMap.Scale", "AMap.OverView", "AMap.ToolBar", "AMap.MapType"],
  v: "1.4.4"
});

Vue.use(animated)

Vue.use(wlGantt)

Vue.use(dataV)

Vue.use(ElementUI);


Vue.config.productionTip = false

Vue.use(Antd)

require('./mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
