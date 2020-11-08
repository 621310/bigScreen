import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tmp:'我是store state中定义的一个变量，可以在全局组件中使用',
    num:64,
  },
  getters:{
    getNum(state){
        console.log(state)
        return state.num
    }
  },
  mutations: {
    //mutations里改变state中的变量，不能进行异步操作
    //接收的第一个参数为state
    operatingNum(state,i){
      state.num = state.num + i
    }
  },
  actions: {
  },
  modules: {
  }
})
