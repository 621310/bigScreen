<template>
    <div>
        <p>我是父亲,我的money变量值为{{money}}    <a-button @click="ffff">调用子组件</a-button></p>
        <son1 :money="money" @aaa="change" ref="son1"></son1>

        <!-- <son1 :money="money" :value.sync="money"></son1> -->
      
    </div>
</template>
<script>

import son1 from '@/components/son1.vue'

export default {

components:{
    son1,
},
//1父组件性子组件传值，在应用子组件加上  :value="money"  子组件中通过props接收 
//  2通过v-bind = '$attrs'向子组件传递所有属性 通过v-on='$listeners'向子组件传递所有方法
//3父组件通过ref获取子组件的属性，方法

    data(){
        return{
            money:100,
        }
    },
    methods:{
        change(value){
            this.money = value
        },

        ffff(){
            this.$refs.son1.pay()
        }
    }
}
</script>