<!-- Find -->
<template>
  <div>
    <h1 @click='changeMsg'> 发现<span v-text='msg'></span></h1>
    <div class="find">
      <router-link to="/find/good" tag="span" active-class="findHigh">发现好物</router-link>
      <router-link to="/find/price" tag="span" active-class="findHigh">发现优惠</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div v-for='item in cnodeList' :key="item.id" style='margin-top:15px;'>
      <span v-text='item.title'></span>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  methods : {
    ...mapActions('study',['asnycMsg']),
    ...mapActions('study',['send']),
    changeMsg : function(){
      // 不建议如此粗暴的修改state值
      // this.$store.state.msg++


      // 通过commit()方法提交一个名为change的方法到mutations,直接地同步地更新state数据（不建议这样直接修改）
      // this.$store.commit('change',1)
      

      // 通过dispatch方法派发一个名为asnycMsg的方法到actions,间接地异步的更新state数据

      // this.$store.dispatch('asnycMsg',10)

      // 通过vuex的mapActions方法拿到actions里面的函数，并用this访问
      this.asnycMsg(10)
    }
  },
  computed : {
    ...mapState('study',['msg']),
    ...mapState('study',['cnodeList'])
  },
  mounted (){
    let parmas = {
      page : 1,
      limit : 5,
      tab : "ask",
      mdrender : false
    }
    this.send(parmas)
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