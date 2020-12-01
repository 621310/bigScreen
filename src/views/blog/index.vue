<template>
    <div style="height: 100%">
        <router-view />

<!--        <van-tabbar route>-->
<!--            <van-tabbar-item replace to="/bloghome" icon="home-o">首页</van-tabbar-item>-->
<!--            <van-tabbar-item replace to="/classification" icon="apps-o">分类</van-tabbar-item>-->
<!--            <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>-->
<!--        </van-tabbar>-->
    </div>
</template>
<script>
    import { Tabbar, TabbarItem,Button  } from 'vant';

    export default {
        components:{
            [Tabbar.name]:Tabbar,
            [TabbarItem.name]:TabbarItem,
            [Button.name]:Button,
        },
        mounted(){
            this.$router.push("/bloghome")
        }
    }
</script>
