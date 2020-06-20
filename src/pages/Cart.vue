<!-- Cart -->
<template>
<div class="cart">
    <van-nav-bar 
    title="购物车" 
    left-text="返回" 
    left-arrow 
    fixed 
    placeholder
    @click-left='clickLeft'
    > 
        <template #right>
            <van-icon name="clock-o" size="18" />
        </template>
    </van-nav-bar>
    <!-- 购物车列表 -->
    
    <div class="list" v-for='(item,index) in list' :key='item._id'>
        <van-swipe-cell>
            <van-row type='flex' align='center' justify='center'>
                <van-col span="4">
                    <van-cell center>
                        <van-checkbox 
                        v-model="item.checked"
                        @change='checkChange(index, $event)'
                        ></van-checkbox>
                    </van-cell>
                </van-col>
                <van-col span="20">
                    <van-card
                    :num="item.num"
                    :price="item.good.price"
                    :desc="item.good.desc"
                    :title="item.good.name"
                    :thumb="item.good.img"
                    >
                        <template #footer>
                            <van-button size="mini" @click="upDateNum('reduce',item)">-</van-button>
                            <van-button size="mini" @click="upDateNum('add',item)">+</van-button>
                        </template>
                    </van-card>
                </van-col>
            </van-row>
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="onDelete(item)"/>
            </template>
        </van-swipe-cell>
    </div>
    <van-submit-bar 
    :price="total" 
    button-text="提交订单" 
    @submit="onSubmit"
    safe-area-inset-bottom
    placeholder
    >
        <van-checkbox v-model="allChecked" @click='changeAll'>全选</van-checkbox>
        <template #tip>
            你的收货地址不支持同城送, <span class="tip" @click="onClickEditAddress">修改地址</span>
        </template>
    </van-submit-bar>

</div>

</template>

<script>
import {
    NavBar,
    Icon,
    Col, 
    Row,
    Checkbox,
    Card,
    Button,
    Cell,
    SubmitBar,
    SwipeCell,
    Toast
}from 'vant'

import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
    name : 'Cart',
    data : function(){
        return {
            allChecked : true
        }
    },
    components : {
        // Tabbar : ()=> import('../components/common/TabBar.vue'),
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Col.name]:Col,
        [Row.name]:Row,
        [Checkbox.name]:Checkbox,
        [Card.name]:Card,
        [Button.name]:Button,
        [Cell.name]:Cell,
        [SubmitBar.name]:SubmitBar,
        [SwipeCell.name]:SwipeCell,
        [Toast.name]:Toast
    },
    mounted(){
        this.upDateList({})
    },
    computed : {
        ...mapState('cart',['list']),
        ...mapGetters('cart',['total'])
    },
    methods : {
        ...mapActions('cart',['upDateList']),
        ...mapMutations('cart',['changeItem']),
        clickLeft(){
            this.$router.replace('/home')
        },
        upDateNum(type,item){
            // console.log(item)
            if(type=='reduce'){
                item.num--
                if(item.num<1){
                    item.num = 1
                    Toast('不能再少啦')
                    return
                }
            }else{
                item.num++
            }
            
            let data = {
                num: item.num,
                id: item._id
            }
            this.$api.upDateCart(data).then(()=>{
                // console.log(data)
                this.upDateList({})
            })
        },
        checkChange(index,checked){
            let obj = {
                index,
                checked
            }
            this.changeItem(obj)
            // console.log(this.list)
            let arr = this.list.filter((ele)=>{
                return ele.checked == true
            })
            if(arr.length==this.list.length){
                this.allChecked = true
            }else{
                this.allChecked = false
            }
        },
        onDelete(item){
            let params = {
                id : item._id
            }
            this.$api.deleteCart(params).then(()=>{
                this.upDateList({})
            })
        },
        changeAll(){
            // console.log(this.list) 
            this.list.map((ele)=>{
                ele.checked = this.allChecked
            })
        },
        onSubmit(){
            let str = ''
            this.list.map((ele)=>{
                if(ele.checked){
                    str+=";"+ele.good_id
                }
            })
            console.log('提交付钱啦啦！',str)
            let data = {
                goods : str
            }
            this.$api.submitCart(data).then(()=>{
                Toast('下单成功！')
                this.upDateList({})
            })
        },
        onClickEditAddress(){
            console.log('修改地址了！')
        }
    }
}
</script>
<style lang='scss' scoped>
    .cart{
        padding-bottom: 2.24rem;
        .list{
            border-top: 1px solid #eee;
            .van-row{
                background-color: #fff;
                .van-col{
                    .van-card{
                        padding-left: 0;
                        background: none;
                    }
                }
            }
            .delete-button {
                height: 100%;
            }
        }
        .van-submit-bar{
            .tip{
                color: #19A7E8;
            }
        }
    }
</style>