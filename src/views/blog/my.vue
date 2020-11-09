<template>
    <div>
        <van-nav-bar title="我的信息"/>

        <van-cell style="margin-top: 10px" center value="修改头像" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <van-image round width="3rem" height="3rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            </template>
        </van-cell>

        <van-cell style="margin-top: 10px" title="昵称" is-link :value="this.$store.state.username" />
        <van-cell title="手机号" is-link value="15972938888" />
        <van-cell title="生日" is-link value="2020/11/09" />
        <van-cell title="码龄" is-link :value="this.$store.getters.getCodeAge" @click="show = true"/>

        <van-cell style="margin-top: 10px" title="个性签名" is-link value="哈哈哈哈哈哈哈哈哈" />
        <van-cell title="收货地址" is-link />


        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    title="选择年月日"
                    @confirm="onConfirm"
                    @cancel="oncancel"
                    :min-date="minDate"
                    :max-date="maxDate"
            />
        </van-popup>

    </div>
</template>

<script>
    import {NavBar,Cell,Image as VanImage,DatetimePicker ,Popup  } from 'vant'
    import dateUtil from "../../util/DateUtil";
    export default {
        name: "my",
        components:{
            [NavBar.name]:NavBar,
            [Cell.name]:Cell,
            [VanImage.name]:VanImage,
            [DatetimePicker .name]:DatetimePicker ,
            [Popup .name]:Popup ,
        },
        data(){
            return{
                show:false,
                minDate:new Date("2000-01-01"),
                maxDate:new Date(),
                currentDate:new Date(this.$store.state.joinTime)
            }
        },
        methods:{
            onConfirm(value){
                console.log(dateUtil.getFormatDate(value,'yyyy-mm-dd'))
                //更改vuex  state中的joinTime
                this.$store.commit("updateJoinTime",dateUtil.getFormatDate(value,'yyyy-mm-dd'))
                this.show = false
            },
            oncancel(){
                this.show = false
            }
        }
    }
</script>

<style scoped>

</style>