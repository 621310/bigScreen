<template>
    <div>
        <van-button type="info" @click="goIndex">这是一个按钮</van-button>
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
                this.$router.push("/")
            }
        },
    };
</script>
<style>

</style>
