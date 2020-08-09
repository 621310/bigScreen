<template>
    <div style="background:yellow;margin-top:2rem">
        我是孙子
         <a-button type="danger" @click="changyeye"> Danger</a-button>
    </div>
</template>
<script>
export default {
    methods:{
        changyeye(){
            this.$parent.$emit('aaa',800)
        }
    }
}
</script>