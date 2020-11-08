<template>
    <div>
       <div> {{$store.state.tmp}}</div>
       <h1>{{$store.getters.getNum}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            count:0,
        }
    },
    mounted(){
        console.log(this.$store.state.tmp)
        this.$store.commit("operatingNum",6)
        console.info("改变后",this.$store.state.num)
    }
}
</script>