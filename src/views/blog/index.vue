<template>
    <div>
            哒哒哒
    </div>
</template>

<script>
    import {test001} from '../../request/api'
    export default {
        name: "index",
        mounted(){
            test001({}).then(res =>{
                console.log(res)
            })
            this.$store.dispatch("getUserInfoAsync")
            console.info("store",this.$store)
        }
    }
</script>

<style scoped>

</style>
