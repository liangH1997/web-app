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
const Good = () => import('@/components/Find/Good.vue')
const Price = () => import('@/components/Find/Price.vue')
const Detail = () => import('@/pages/Detail.vue')

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
            component : Find,
            children : [
                {
                    path : 'good',
                    component : Good
                },
                {
                    path : 'price',
                    component : Price
                },
                {
                    path : '/find',
                    redirect : '/find/good'
                }
            ]
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
            path : '/detail/:id',
            component : Detail,
            props: true
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
            next('/user')
        }
    }else{
        next()
    }
})

// 抛出路由实例
export default router