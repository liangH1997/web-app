<!-- User -->
<template>
<div>
<h1>我的</h1>
  <Tabbar> </Tabbar>
</div>
  
</template>

<script>
export default {
  name: "User",
  components : {
    Tabbar : ()=> import('../components/common/TabBar.vue')
  }
};
</script>
<style scoped>
h1 {
 color: purple;
}
</style>