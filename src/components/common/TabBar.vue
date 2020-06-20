<!-- TabBar -->
<template>

    <van-tabbar route fixed placeholder>
        <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot to='/find'>发现</van-tabbar-item>
        <van-tabbar-item icon="cart-o" :badge="list.length" to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to='/user'>我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
import {Tabbar, TabbarItem} from 'vant'
import {mapState,mapActions} from 'vuex'
export default {
    name : 'Tabbar',
    components : {
        [Tabbar.name] : Tabbar,
        [TabbarItem.name] : TabbarItem
    },
    mounted(){
        // console.log(TabbarItem,Tabbar)
        this.upDateList({})
    },
    computed : {
        ...mapState('cart',['list'])
    },
    methods : {
        ...mapActions('cart',['upDateList'])
    }
}
</script>
<style lang='scss' scoped>
.van-tabbar{
    border-top: 1px solid #ccc;
}
</style>