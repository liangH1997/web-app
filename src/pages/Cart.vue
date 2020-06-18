<!-- Cart -->
<template>
<div>
    <h1>购物车</h1>
    <Tabbar></Tabbar>

</div>

</template>

<script>
export default {
    name : 'Cart',
    components : {
        Tabbar : ()=> import('../components/common/TabBar.vue')
    }
    // 局部 路由守卫
    // beforeRouteEnter (to,from,next){
    //     let isLogin = false
    //     if(isLogin){
    //         next()
    //     }else{
    //         next('/user')
    //     }
    //     console.log(to);
    //     console.log(from);
    //     next()
    // }
}
</script>
<style scoped>
    h1{
        color: blue;
    }
</style>