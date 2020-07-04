<!-- User -->
<template>
<div class="user">
  <!-- 导航条 -->
  <div class="header">
    <van-nav-bar :border="false" title="个人中心" >
        <template #left>
          <van-icon name="scan" color="#fff" size=".5rem" />
        </template>
        <template #right>
          <van-icon name="ellipsis" color="#fff" size=".6rem" />
        </template>
      </van-nav-bar>
    <div class="bg">
      
    </div>
    <div class="info">
      <div class="avatars">
        <div class="img"></div>
        <div class="username">
          <h2 v-text='info.username'></h2>
          <h3 v-text='"ID:"+info._id'></h3>
        </div>
        <div class="icon">
          <van-icon name="arrow" color="#fff" size=".6rem"></van-icon>
        </div>
      </div>
      <div class="fans">
        <span>
          <em v-text="parseInt(Math.random()*30)"></em>
          <i>商品关注</i>
        </span>
        <span>
          <em v-text="parseInt(Math.random()*30)"></em>
          <i>店铺关注</i>
        </span>
        <span>
          <em v-text="parseInt(Math.random()*99)"></em>
          <i>浏览足迹</i>
        </span>
        <span>
          <em v-text="parseInt(Math.random()*50)"></em>
          <i>最新动态</i>
        </span>
      </div>
    </div>
  </div>
  <!-- 商品管理 -->
  <div class="goods">
    <h2>
      <em>
        我的订单
      </em>
      <span>
        <i>查看全部</i>
        <van-icon name="arrow" />
      </span>
      </h2>
    <div class="order">
      <span>
        <van-icon name="cart-circle-o"  size=".5rem" :badge="parseInt(Math.random()*10)" />
        <em>待付款</em>
      </span>
      <span>
        <van-icon name="bag-o"  size=".5rem" :badge="parseInt(Math.random()*15)" />
        <em>待发货</em>
      </span>
      <span>
        <van-icon name="point-gift-o"  size=".5rem" :badge="parseInt(Math.random()*15)" />
        <em>已发货</em>
      </span>
      <span>
        <van-icon name="todo-list-o"  size=".5rem" :badge="parseInt(Math.random()*5)" />
        <em>待评价</em>
      </span>
    </div>
  </div>

  <!-- 列表选项 -->
  <div class="check-list">
    <van-cell  title="地址管理" icon="location-o" is-link />
    <van-cell  title="我的消息" icon="chat-o" is-link />
    <van-cell  label="我的安全我做主" title="安全中心" icon="warn-o" is-link />
    <van-cell  title="账本管理" icon="coupon-o" is-link />
    <van-cell  title="实名认证" icon="manager-o" is-link />
    <van-cell  label="时间管理大师帮您打理" title="数据管理" icon="chart-trending-o" is-link />
    <van-cell  title="帮助与反馈" icon="records" is-link />
    <van-cell label="欢迎提问"  title="我的客服" icon="service-o" is-link />
    <van-cell title="系统设置" icon="setting-o" is-link />
  </div>
  <!-- 退出登录 -->
  <van-button type="default" block @click="exitHandle">退出登录</van-button>

  <!-- 标签导航 -->
  <Tabbar> </Tabbar>
</div>
  
</template>

<script>
import {
  NavBar,
  Icon,
  Cell,
  Button,
  Dialog
}from 'vant'
export default {
  name: "User",
  data : function(){
    return {
      info : {}
    }
  },
  components : {
    Tabbar : ()=> import('../components/common/TabBar.vue'),
    [NavBar.name] : NavBar,
    [Icon.name] : Icon,
    [Cell.name] : Cell,
    [Button.name] : Button,
    [Dialog.name] : Dialog.Component
  },
  mounted (){
    this.$api.getInfo({}).then(res=>{
      // console.log(res)
      this.info=res
    })
  },
  methods : {
    exitHandle(){
      Dialog.confirm({
        title: '',
        message: '您真的要退出吗？'
      })
        .then(() => {
          // on confirm
          console.log('确定')
          localStorage.removeItem('token')
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
          console.log('取消')
        });
    }
  }
};
</script>
<style lang='scss'>
.user{
  padding-bottom: .34rem;
  .header{
    height: 7rem;
    overflow: hidden;
    position: relative;
    .van-nav-bar{
      background: none;
      .van-nav-bar__title{
        color: #ffffff;
      }
    }
    .bg{
      position: absolute;
      width: 140%;
      height: 7rem;
      top: 0;
      left: -20%;
      border-radius: 0 0 120% 120%;
      background-color: #F1242B;
      z-index: -1;
    }
    .info{
      height: 4rem;
      padding: .3rem .4rem 0 .4rem;
      // border: 2px solid #cccccc;
      overflow: hidden;
      .avatars{
        // background-color: rgba($color: white, $alpha: .3);
        border-radius: .267rem;
        height: 1.6rem;
        display: flex;
        padding: .2rem;
        justify-content: start;
        align-items: center;
        position: relative;
        .img{
          width: 1.6rem;
          height: 1.6rem;
          background-color: darkblue;
          border-radius: 50%;
          border: 2px solid #fff;
          float: left;
        }
        .username{
          color: #fff;
          h2{
            font-size: .5rem;
            line-height: .5rem;
            font-weight: 700;
          }
          h3{
            font-size: .3rem;
            margin-top: .2rem;
            line-height: .3rem;
            color: #ccc;
          }
          float: left;
          margin-left: .3rem;
        }
        .icon{
          // float: right;
          position: absolute;
          right: .5rem;
        }
      }
      .fans{
        display: flex;
        height: 2rem;
        // background-color: salmon;
        margin-top: .15rem;
        font-size: .4rem;
        justify-content: center;
        align-items: center;
        span:first-child{
          border: none;
        }
        span{
          display: flex;
          flex: 1;
          height: 1.2rem;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          border-left: 1px solid #fff;
          opacity: .85;
          em{
            display: block;
            font-size: .45rem;
          }
          i{
            display: block;
            font-size: .3rem;
          }
        }
      }
    }
  }
  .goods{
    width: 9.2rem;
    margin: 0 auto;
    height: 3.4rem;
    margin-top: -1rem;
    border-radius: .267rem;
    box-shadow:  0px 3px 6px 1px rgba($color: #F1242B, $alpha: .1);
    background-color: #fff;
    box-sizing: border-box;
    padding: .267rem;
    z-index: 2;
    h2{
      padding-bottom: .15rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i{
        font-size: .267rem;
        color: #999;
        line-height: .267rem;
      }
    }
    .order{
      margin-top: .3rem;
      display: flex;
      align-items: center;
      height: 2rem;
      span:nth-child(1){
        border: none;
      }
      span{
        height: 1.4rem;
        flex: 1;
        padding: 0 .267rem;
        border-left: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: .34rem;
        align-items: center;
        text-align: center;
        i{
          // display: block;
          width: .6rem;
        }
      }
    }
  }
  .check-list{
    width: 9.2rem;
    margin: 0 auto;
    border-radius: .267rem;
    // border: 1px solid #cccccc;
    min-height: 7rem;
    margin-top: .6rem;
    overflow: hidden;
    box-shadow:  0px 3px 6px 1px rgba($color: #F1242B, $alpha: .1);
  }
  .van-button{
    width: 9.2rem;
    margin: 0 auto;
    margin-top: .6rem;
    border-radius: .267rem;
    // border-color: red;
    color: red;
    box-shadow:  0px 3px 6px 1px rgba($color: #F1242B, $alpha: .1);
  }
  
}

</style>