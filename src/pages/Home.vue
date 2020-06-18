<!-- Home -->
<template>
  <div>
    <h1>首页 </h1>
    <Tabbar></Tabbar>
  </div>
</template>

<script>

export default {
    name : 'Home',
    components : {
        Tabbar : ()=> import('../components/common/TabBar.vue')
    }
};
</script>
<style lang='scss' scoped>

</style>