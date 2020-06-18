<!-- TabBar -->
<template>

    <van-tabbar route fixed>
        <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot to='/find'>发现</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5" to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to='/user'>我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
import {Tabbar, TabbarItem} from 'vant'

export default {
    name : 'Tab',
    components : {
        [Tabbar.name] : Tabbar,
        [TabbarItem.name] : TabbarItem
    },
    mounted(){
        console.log(TabbarItem,Tabbar)
    }
}
</script>
<style scoped>

</style>