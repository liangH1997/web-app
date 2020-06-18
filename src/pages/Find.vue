<!-- Find -->
<template>
  <div>
    <h1> 发现</h1>
    <Tabbar></Tabbar>

  </div>
</template>

<script>

export default {
  name : 'Find',
  components : {
    Tabbar : ()=> import('../components/common/TabBar.vue')
  }
};
</script>
<style scoped>

</style>