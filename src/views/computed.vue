<template>
    <div>
        <h1>计算属性和侦听属性</h1>
        <div>
            {{message}}
        </div>
        <div>
            {{reversedMessage}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:'dfsaffa',
            name:'zhangsanfeng',
        }
    },
    computed:{
            // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },

    }
    
}
</script>