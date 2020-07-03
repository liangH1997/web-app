<!-- Home -->
<template>
  <div class="home">
    <!-- 消息通知栏 -->
    <van-notice-bar left-icon="volume-o" :scrollable="false" mode="closeable">
      <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
        <van-swipe-item>京东618，精彩好礼等你来！</van-swipe-item>
        <van-swipe-item>淘宝11.11，光棍不孤单！</van-swipe-item>
        <van-swipe-item>地狱空荡荡，魔鬼在人间！</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
    
    <!-- 搜索栏 -->
    <van-search 
    shape="round" 
    background="#B10C06" 
    :placeholder="good" 
    disabled 
    show-action
    >
      <template #left>
        <van-icon name="apps-o" @click="goList" color="#fff" size="0.8rem" />
      </template>

      <template #action>
        <div class="toLogin" @click="goLogin">登录</div>
      </template>
    </van-search>


    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <!-- 轮播图 -->
    <div class="swipeBox">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for='item in bannerlist' :key='item.id'>
          <van-image
            width="10rem"
            :src="item.img"
            :title="item.title"
          />
        </van-swipe-item>
        
      </van-swipe>
    </div>

    <!-- 精品推荐 -->
    <van-divider>精品推荐</van-divider> 
      <van-list
        finished-text="没有更多了"
        offset='100'
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :immediate-check='false'
      >
      <div v-for="i in len" :key="i">
        <Good :good='goodList[2*(i-1)]'></Good>
        <Good :good='goodList[2*(i-1)+1]'></Good>
      </div>
      </van-list>
    </van-pull-refresh>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { 
  NoticeBar,
  Swipe,
  SwipeItem, 
  Search, 
  Icon, 
  Image,
  Divider,
  PullRefresh,
  List,
  Cell,
  CellGroup
  } from "vant";
  
export default {
  name: "Home",
  components: {
    Tabbar: ()=>import('@/components/common/TabBar.vue'),
    Good: ()=>import('@/components/common/Good.vue'),
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Divider.name]:Divider,
    [PullRefresh.name]:PullRefresh,
    [List.name]:List,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  },
  computed: {
    good: () => {
      let arr = ["九阳豆浆机", "美的变频空调", "格力电饭煲"];
      return arr[Math.floor(Math.random() * 3)];
    },
    len : function(){
      return Math.floor(this.goodList.length/2)
    }
  },
  data : ()=> {
    return {
      refreshing: false,
      page : 1,
      goodList : [],
      loading : false,
      finished : false,
      bannerlist : []
    };
  },
  methods: {
    goLogin() {
      console.log("跳转去登录页了");
      this.$router.push('/login')
    },
    goList() {
      console.log("商品列表");
    },
    getGoodList(){
      let params = {
        hot : false,
        page : this.page
      }
      this.$api.getList(params).then(res=>{
        // console.log('res',res)
        if(res.length==0){
          console.log('到底了哦！')
          this.finished = true
          this.loading = true
          return
        }
        if(this.refreshing){
          this.goodList=res
        }else{
          this.goodList = [...this.goodList,...res]
        }
        this.loading=false
        this.finished=false
        this.refreshing=false
      })
    },
    onLoad() {
      this.page++
      this.getGoodList()
      // console.log('继续加载中...')
      
    },
    onRefresh() {
      // 调接口重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.page=1
      this.getGoodList()
    }
  },
  mounted (){
    this.getGoodList()
    this.$api.getBanner().then(arr=>{
      this.bannerlist=arr
    })
  }
};
</script>
<style lang='scss' scoped>
.home {
  -webkit-overflow-scrolling: touch;
  .van-notice-bar {
    height: 1.2rem;
    .notice-swipe {
      height: 1.2rem;
      line-height: 1.2rem;
      
    }
  }
  .van-search {
    height: 1.173333rem;
    .toLogin {
      color: #fff;
    }
    .van-icon {
      margin-right: 0.133333rem;
    }
  }
  .swipeBox {
    height: 4.133333rem;
    background-color: #b10c06;
    overflow: auto;
  }
  .my-swipe {
    margin: 0 auto;
    margin-top: 0.2rem;
    border-radius: 20px;
    width: 9.4rem;
    overflow: hidden;
    height: 3.733333rem;
  }
  .van-divider{
    color: '#1989fa';
    border-color: '#1989fa';
    padding: '0 .213rem';
    margin-top : '.113rem';
    font-size: .533333rem;
  }
}
</style>