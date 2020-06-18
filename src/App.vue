<template>
  <div class="app">
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted : function(){
    // console.log(this.$store)
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
