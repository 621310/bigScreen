<template>
    <div>
        <van-button type="info" @click="goIndex">这是一个按钮</van-button>
        <span class="icon iconfont icon-feiji"></span>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {
            goIndex(){
                this.$router.push("/list")
            }
        },
    };
</script>
<style>

</style>
