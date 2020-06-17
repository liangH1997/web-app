<!-- Find -->
<template>
  <div>
    <h1 @click='changeMsg'> 发现<span v-text='$store.state.msg'></span></h1>
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
export default {
  methods : {
    changeMsg : function(){
      // 通过commit()方法提交一个名为change的方法到mutations,直接地同步地更新state数据（不建议这样直接修改）
      // this.$store.commit('change',1)
      

      // 通过dispatch方法派发一个名为asnycMsg的方法到actions,间接地异步的更新state数据

      this.$store.dispatch('asnycMsg',10)
    }
  }
};
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