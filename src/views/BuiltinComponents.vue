<template>
    <div>
        <!-- <component :is="component001"></component> -->

        <transition name="fade" mode="out-in" appear>
            <component :is="view"></component>
        </transition>

        <button @click="change">transition</button>
        <button ref="tempref">{{temp}}</button>
        <div ref='testref'></div>
        <p ref='testref'></p>
        <!-- <my-components></my-components> -->
    </div>
</template>
<script>
import test from "./index"
import parent from '@/components/parent.vue'


export default {

    aa:{
        name:'张三丰',
        age:78
    },
    components:{
        test,parent
    },
    mounted(){

        console.info("this是当前vue实列",this)
        console.info("我看看是不是注册了那些组件",this.$options.components)
        console.info("vue.js内置组件componebt可动态设置页面渲染指定组件。is设置即可")
        this.temp = this.$options.aa.name
        console.info("看看data",this.$options.data)
        console.info("vm.$data",this.$data)
        console.info("vm.$refs",this.$refs)
        this.$refs.testref.style.width='100%'
        this.$refs.testref.style.height='100px'
        this.$refs.testref.style.background='red'

        console.info("vm.$attrs",this.$attrs)
    },
    data(){
        return{
            component001:this.$options.components.test,
            component002:this.$options.components.parent,
            view: this.$options.components.test,
            temp:''
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
.fade-enter-active{
    /* fadeInLeft:向右淡入 */
   animation: fadeInLeft 1s;   
}
.fade-leave-to{
    animation: bounceOut 1s; 
}


/* .fade-enter-active, .fade-leave-active {
  animation: fadeInLeft 1s;
}
.fade-enter, .fade-leave-to {
  animation: fadeInLeft 1s ;
} */
</style>