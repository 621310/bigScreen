<template>
    <div class="content">
        <van-form class="loginForm" @submit="onSubmit">
            <van-field
                    class="formItem"
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    class="formItem"
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin-top: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {Form,Field,Button  } from 'vant'
    import {userlogin} from "../../request/api";

    export default {
        name: "login",
        components:{
            [Form.name]:Form,
            [Field .name]:Field,
            [Button  .name]:Button ,
        },
        data() {
            return {
                username: '',
                password: '',
            };
        },
        mounted(){

        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);
                userlogin(values).then( (res) => {
                    console.log(res)
                    if(res.status === 200){
                        this.$router.push("/index")
                        this.$store.dispatch('getUserInfoAsync')
                    }
                })
            },
        },
    }
</script>

<style scoped>
.content{
    height: 100%;
    width: 100%;
    background: url("../../assets/bg2.jpg");
    background-size: 100% 100%;
    position: relative;
}
    .loginForm{
        width: 100%;
        padding: 0 1rem;
        position: absolute;
        top: 20%;

    }
    .formItem{
        margin-top: 20px;
        border-radius: 20px;
    }

</style>
