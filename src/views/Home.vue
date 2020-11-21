<template>
  <div class="home">
      父子组件之间的通信方式
    <parent></parent>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import parent from '@/components/parent.vue'
import {apiTest} from '../request/api'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    parent
  },
    mounted(){
        apiTest({}).then((res) =>{
            console.log(res)
            if(res.status === 403){
                this.$router.push("/")
            }
        })
    }

}
</script>
