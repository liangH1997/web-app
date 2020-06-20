<!-- GoodDesc -->
<template>
  <div class="gooddesc">
    <div class="imgBox">
      <img :src="good.img" alt />
      <van-button icon="arrow-left" round type="primary" @touchstart="TouchEvent" />
    </div>
    <div class="price">
      <span>￥</span>
      <em v-text='good.price'></em>
    </div>
    <!-- 描述 -->
    <div class="desc" v-text="good.desc"></div>
    <!-- <h1 v-text="good.name"></h1> -->
    <!-- 加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="list.length"  @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
import {
    Button,
    GoodsAction, 
    GoodsActionIcon, 
    GoodsActionButton,
    Toast
}from 'vant';
import {mapState,mapActions} from 'vuex'
export default {
    data : function(){
        return {
            good : {}
        }
    },
    props : {
        id :{
            type : String,
            required : true
        }
    },
    components : {
        [Button.name]:Button,
        [GoodsAction.name]:GoodsAction,
        [GoodsActionIcon.name]: GoodsActionIcon,
        [GoodsActionButton.name]:GoodsActionButton,
        [Toast.name]:Toast
    },
    mounted(){
        this.upDateList({})
        let params = {
            good_id : this.id
        }
        this.$api.getGoodDesc(params).then((res)=>{
            // console.log(res)
            this.good = res
        })
    },
    computed : {
        ...mapState('cart',['list'])
    },
    methods:{
        ...mapActions('cart',['upDateList']),
        TouchEvent(){
            this.$router.back()
        },
        onClickIcon() {
            this.$router.push('/cart')
        },
        onClickButton() {
            // console.log(this.id)
            let data = {
                good_id : this.id
            }
            this.$api.addCartList(data).then(()=>{
                // console.log(res)
                Toast('添加成功')
                // this.$router.push('/cart')
                this.timer = setTimeout(()=>{
                    this.$router.replace('/cart')
                },1500)
                
            })
        }
    },
    beforeDestroy(){
            clearTimeout(this.timer)
    },
}
</script>
<style lang='scss' scoped>
.gooddesc {
  background-color: #ffffff;
  .imgBox {
    width: 10rem;
    height: 10rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .van-button {
      padding: 0;
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      background-color: rgba($color: #000000, $alpha: 0.5);
      border: none;
    }
  }
  .price {
    // position: absolute;
    border-bottom: 1px solid #ccc;
    padding: 0 0.4rem;
    line-height: 1rem;
    margin-top: 0.267rem;
    span {
      color: #e43130;
      font-size: 0.6rem;
      font-weight: 700;
    }
    em {
      font-size: 0.8rem;
      color: #e43130;
      margin-left: 0.133rem;
      font-weight: 700;
    }
  }
  .desc {
    font-size: 0.427rem;
    font-weight: 700;
    line-height: 0.6rem;
    padding: 0.133rem 0.4rem;
  }
}
</style>