<!-- Find -->
<template>
  <div class="find">
    <!-- nav -->
    <div class="find-left">
      <van-sidebar v-model="activeKey" @change='onChange'>
        <van-sidebar-item v-for='cate in cates' :key="cate._id" :title="cate.cate_zh" />
      </van-sidebar>
    </div>
    
    <!-- content -->
    <div class="find-right">
      <van-grid 
      :border="false" 
      :column-num="3"
      v-for = 'item in num'
      :key = 'item'
      >
        <van-grid-item>
          <van-image :src="findlist==[]?'':findlist[3*(item-1)].img" />
        </van-grid-item>
        <van-grid-item>
          <van-image :src="findlist==[]?'':findlist[3*(item-1)+1].img" />
        </van-grid-item>
        <van-grid-item>
          <van-image :src="findlist==[]?'':findlist[3*(item-1)+2].img" />
        </van-grid-item>
      </van-grid>
    </div>
    
    <Tabbar></Tabbar>

  </div>
</template>

<script>
import {
  Sidebar, 
  SidebarItem,
  Grid, 
  GridItem,
  TreeSelect,
  Image
}from 'vant'

import {mapState,mapMutations,mapGetters,  mapActions} from 'vuex'

export default {
  name : 'Find',
  data : ()=>{
    return {
      activeKey : 0,
      cates : [],
      // num : 3
    }
  },
  components : {
    Tabbar : ()=> import('../components/common/TabBar.vue'),
    [Sidebar.name]:Sidebar,
    [SidebarItem.name]:SidebarItem,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [TreeSelect.name]:TreeSelect,
    [Image.name]:Image
  },
  computed : {
    ...mapState('find',['allGoods','findlist']),
    ...mapGetters('find',['num'])
  },
  methods : {
    ...mapMutations('find',['updateList']),
    ...mapActions('find',['goUpdate']),
    getGoods(){
      let params = {
        cate : this.cates[this.activeKey].cate
      }
      this.goUpdate(params)
    },
    async init(){
      let arr = await this.$api.getAllCates({})
      this.cates = arr
      // console.log(this.cates)
      this.getGoods()
    },
    onChange(){
      // console.log(index)
      this.getGoods()
    }
      
  },
  mounted (){
    this.init()
  }
}
</script>
<style lang='scss' scoped>
.find{
  // position: relative;
  .find-left{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 1.233rem;
    width: 2.27rem;
    overflow: auto;
    // 在移动端有absolute产生滚动条，使用下面这个属性，可以更加流畅
    -webkit-overflow-scrolling: touch;
    .van-sidebar{
      width: 2.27rem;
    }
  }
  .find-right{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 1.233rem;
    left: 2.27rem;
    background-color: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>