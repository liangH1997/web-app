<!-- Register -->
<template>
<div class="register">
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="password2"
            type="password"
            name="密码"
            label="确认密码"
            placeholder="请确认密码"
            :rules="[{ required: true, message: '请确认密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
            立即注册
            </van-button>
        </div>
    </van-form>

    <div class="tip">
        已有账号？
        <span @click="toLogin">登录</span>
    </div>
</div>
</template>

<script>
import{
    Form,
    Field,
    Button
} from 'vant'

export default {
    data : function(){
        return{
            username : '',
            password : '',
            password2 : ''
        }
    },
    components : {
        [Form.name]:Form,
        [Field.name]:Field,
        [Button.name]:Button
    },
    methods : {
        onSubmit (){
            console.log('注册啦！')
            let data = {
                username : this.username,
                password : this.password,
                password2 : this.password2
            }
            this.$api.register(data).then(res=>{
                console.log('注册成功！',res)
            })
        },
        toLogin(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang='scss' scoped>
    .register{
        .tip{
            margin-top: .2rem;
            font-size: .48rem;
            text-align: right;
            padding-right: .533rem;
            span{
                cursor: pointer;
                color: #19A7E8;
            }
        }
    }
</style>