import {getUserInfo} from "../../request/api";

export default {
    state: {
        token:"ddddss",
        tmp:'我是store state中定义的一个变量，可以在全局组件中使用',
        num:64,
        username:'爱吃橘子的张三丰',
        joinTime:''
    },
    getters:{
        getNum(state){
            console.log(state)
            return state.num
        },
        getCodeAge(state){
            let startTime = new Date(state.joinTime);
            let endTime = new Date();
            let days = Math.floor((endTime - startTime)/(24 * 3600 * 1000))
            return (days/365).toFixed(1)
        }
    },
    mutations: {
        //mutations里改变state中的变量，不能进行异步操作（不符合规范）
        //接收的第一个参数为state,传输多个参数时可用数组传参
        operatingNum(state,i){
            state.num = state.num + i
        },
        initUserInfo(state,param){
            state.username = param.name
            state.joinTime = param.joinTime
        },
        updateJoinTime(state,joinTime){
            console.log(joinTime)
            state.joinTime = joinTime
        }
    },
    actions: {
        //能够出发mutations,可以有异步操作
        getUserInfoAsync({ commit }){
            getUserInfo({}).then((res) =>{
                // console.log(res)
                commit("initUserInfo",res.data)
            })
            console.log(commit)
        }
    },

}
