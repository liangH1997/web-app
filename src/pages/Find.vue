<!-- Find -->
<template>
  <div>
    <h1>发现</h1>
    <div class="find">
      <router-link to="/find/good" tag="span" active-class="findHigh">发现好物</router-link>
      <router-link to="/find/price" tag="span" active-class="findHigh">发现优惠</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
h1 {
  color: green;
}
.find {
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 20px;
}
.find span {
    flex: 1;
    text-align: center;
    line-height: 50px;
    border: 1px solid #ccc;
}
.find .findHigh{
    color: green;
    border-color: green;
}
</style>