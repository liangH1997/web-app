<!-- GoodBox -->
<template>
<div class="good" @click="toDetail(good._id)">
    <div class="imgBox">
        <img :src="good.img" alt="">
    </div>
    <div class="info">
        <p class="desc" v-text='good.desc'></p>
        <p class="price">
            <span>￥</span>
            <em v-text='good.price'></em>
        </p>
        <div class="btn">找相似</div>
    </div>
</div>
</template>

<script>
export default {
    name : 'Good',
    props : {
        good : {
            type : Object,
            required : true
        }
    },
    mounted(){
        // console.log(this.good)
    },
    methods:{
        toDetail(id){
            // console.log(this.good)
            this.$router.push('/detail/'+id)
        }
    }
}
</script>
<style lang='scss' scoped>
.good{
    background-color: #fff;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 4.667rem;
    margin-left: .223rem;
    height: 7.067rem;
    border-radius: .15rem;
    overflow: hidden;
    .imgBox{
        width: 4.667rem;
        height: 4.667rem;
        img{
            width: 100%;
            height : 100%;
        }
    }
    .info{
        box-sizing: border-box;
        padding: .133rem;
        height: 2.4rem;
        padding-top: .267rem;
        position: relative;
        .desc{
            width: 4.4rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: .373rem;
            line-height: .533rem;
            text-overflow: ellipsis;
        }
        .price{
            position: absolute;
            bottom: .2rem;
            line-height: .533rem;
            span{
                color: #E43130;
                font-size: .4rem;
                font-weight: 700;
            }
            em{
                font-size: .533rem;
                color: #E43130;
                margin-left: .133rem;
            }
        }
        .btn{
            position: absolute;
            bottom: .24rem;
            border: 1px solid #ccc;
            border-radius: .14rem;
            padding: .067rem .2rem;
            font-size: .35rem;
            right: .133rem;
        }
    }
    
}
</style>