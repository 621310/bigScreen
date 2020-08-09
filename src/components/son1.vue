<template>
    <div style="border: 1px solid green">
        <p>我是第一个儿子，我接受到了父亲传过来的值money：{{money}}</p>
        <a-button type="primary" @click="change">点击我触发父亲的方法，修改money值</a-button>
        <sunzi></sunzi>
    </div>
</template>

<script>
import sunzi from '@/components/sunzi.vue'

export default {
    components:{
        sunzi
    },
    props:{
        money:{
            type:Number,
            default:0
        }
    },
    data(){
        return{
            apple:10
        }
    },
    mounted(){
        console.log(this.$parent)
    },
    methods:{
        change(){
            this.$emit('aaa',300)
        },

        pay(){
            this.apple = 5
            alert(this.apple)
        }
    }
}
</script>