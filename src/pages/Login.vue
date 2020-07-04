<!-- login -->
<template>
<div class="login">
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
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
            立即登录
            </van-button>
        </div>
    </van-form>
    <div class="tip">
        没有账号？
        <span @click="toReg">立即注册</span>
    </div>
</div>
</template>

<script>
import{
    Form,
    Field,
    Button,
    Toast
} from 'vant'

export default {
    data : function(){
        return{
            username : '',
            password : ''
        }
    },
    components : {
        [Form.name]:Form,
        [Field.name]:Field,
        [Button.name]:Button,
        [Toast.name]:Toast
    },
    methods : {
        onSubmit (){
            console.log('登录啦！')
            let data = {
                username : this.username,
                password : this.password
            }
            this.$api.toLogin(data).then(res=>{
                Toast.success({
                    message : '登录成功',
                    duration : 500,
                    onClose : ()=>{
                        localStorage.setItem('token',res.token)
                        this.$router.replace('/home')
                    }
                })
            })
        },
        toReg(){
            this.$router.push('/register')
        }
    }
}
</script>
<style lang='scss' scoped>
    .login{
        .tip{
            margin-top: .2rem;
            font-size: .35rem;
            text-align: right;
            padding-right: .533rem;
            span{
                cursor: pointer;
                color: #19A7E8;
            }
        }
    }
</style>