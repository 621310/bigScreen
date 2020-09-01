<template>
    <div>
        <component :is="component001"></component>

        <transition name="fade" mode="out-in" appear>
            <component :is="view"></component>
        </transition>

        <button @click="change">transition</button>
    </div>
</template>
<script>
import test from "./index"
import parent from '@/components/parent.vue'

export default {
    components:{
        test,parent
    },
    mounted(){
        console.info("this是当前vue实列",this)
        console.info("我看看是不是注册了那些组件",this.$options.components)
        console.info("vue.js内置组件componebt可动态设置页面渲染指定组件。is设置即可")
    },
    data(){
        return{
            component001:this.$options.components.test,
            component002:this.$options.components.parent,
            view: this.$options.components.test,
        }
    },
    methods:{
        change(){
            if(this.view == this.$options.components.test){
                this.view = this.$options.components.parent
            }else{
                this.view = this.$options.components.test
            }
           
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 2;
}
</style>