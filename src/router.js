// 引入
import vue from 'vue'

import VueRouter from 'vue-router'
// 注册路由
vue.use(VueRouter)

// 引入组件
const Home = () => import('@/pages/Home.vue')
const Find = () => import('@/pages/Find.vue')
const Cart = () => import('@/pages/Cart.vue')
const User = () => import('@/pages/User.vue')
// const Good = () => import('@/components/Find/Good.vue')
// const Price = () => import('@/components/Find/Price.vue')
const Login = () => import('@/pages/Login.vue')
const Register = () => import('@/pages/Register.vue')
const GoodDesc = () => import('@/pages/GoodDesc.vue')

// 创建路由实例

let router = new VueRouter({
    mode : 'hash',
    routes : [
        {
            path : '/home',
            component : Home
        },
        {
            path : '/find',
            component : Find
        },
        {
            path : '/cart',
            component : Cart
        },
        {
            path : '/user',
            component : User
        },
        {
            path : '/login',
            component : Login
        },
        {
            path : '/register',
            component : Register
        },
        {
            path : '/detail/:id',
            component : GoodDesc,
            props : true
        },
        {
            path : '/',
            redirect : '/home'
        }
    ]
})


// 全局路由守卫

router.beforeEach((to,from,next)=>{
    let isLogin = false
    console.log(to,from);
    if(to.fullPath == '/cart'){
        if(isLogin){
            next()
        }else{
            next()
        }
    }else{
        next()
    }
})

// 抛出路由实例
export default router