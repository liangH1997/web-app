<template>
  <div class="app">
    <router-view></router-view>
    <div class="tab">
      <router-link to='/home' tag="span" active-class="on1">首页</router-link>
      <router-link to='/find' tag="span" active-class="on2">发现</router-link>
      <router-link to='/cart' tag="span" active-class="on3">购物车</router-link>
      <router-link to='/user' tag="span" active-class="on4">我的</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.app{
  width: 100%;
  height: 100%;
}
.tab{
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  bottom: 0;
}
.tab span{
  flex: 1;
  border: 1px solid #ccc;
  line-height: 80px;
  text-align: center;
}
.tab .on1{
  border-color: red;
  color: red;
  font-size: 24px;
  font-weight: 700;
}
.tab .on2{
  border-color: green;
  color: green;
  font-size: 24px;
  font-weight: 700;
}
.tab .on3{
  border-color: blue;
  color: blue;
  font-size: 24px;
  font-weight: 700;
}
.tab .on4{
  border-color: purple;
  color: purple;
  font-size: 24px;
  font-weight: 700;
}
</style>
