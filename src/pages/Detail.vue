<!-- Details -->
<template>
<div>
    <h1>商品详情页</h1>
    <h2 v-text='id'></h2>
</div>
</template>

<script>
export default {
    props : {
        id :{
            type : String,
            required : true
        }
    },
    mounted(){
        console.log('动态传参',this.$route.params.id);
        // this.id = this.$route.params.id
        console.log(this.id);

    }
}
</script>
<style scoped>

</style>