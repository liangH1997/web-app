<!-- Home -->
<template>
  <div>
    <h1>首页 <span v-text='$store.state.msg'></span></h1>
    <h2 v-text='$store.getters.msg2'></h2>
    <div class="list">
      <span v-for="item in list" v-text="item.name" :key="item.id" @click="go(item.id)"></span>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            list : [
                {
                    id : 1,
                    name : '电脑',
                    price : '5000'
                },
                {
                    id : 2,
                    name : '键盘',
                    price : '500'
                },
                {
                    id : 3,
                    name : '鼠标',
                    price : '50'
                },
                {
                    id : 4,
                    name : '耳机',
                    price : '10'
                }
            ]
        }
    },
    methods : {
        go(id){
            this.$router.push('/detail/'+id)
        }
    }
};
</script>
<style scoped>
h1 {
  color: red;
}
.list{
    width: 100%;
    height: 50px;
    display: flex;
    margin-top: 20px;
}
.list span {
    flex: 1;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 50px;

}
</style>