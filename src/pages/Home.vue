<!-- Home -->
<template>
  <div>
    <h1>首页 <span v-text='msg'></span></h1>
    <h2 v-text='msg2'></h2>
    <div class="list">
      <span v-for="item in list" v-text="item.name" :key="item.id" @click="go(item.id)"></span>
    </div>
    <h1 v-text='singer'></h1>
    <div v-for='song in songList' :key='song.docid' style='margin-top:15px;'>
        <span v-text='song.name'></span>
        <span>----</span>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters, mapActions} from 'vuex'

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
        ...mapActions('song',['sReq']),
        go(id){
            this.$router.push('/detail/'+id)
        }
    },
    computed : {
        ...mapGetters('study',['msg2']),
        ...mapState('study',['msg']),
        ...mapState('song',['singer','songList'])
    },
    mounted(){
        let params = {
            ct:24,
            qqmusic_ver:1298,
            new_json:1,
            remoteplace:'txt.yqq.song',
            searchid: 54616638128860322,
            t:0,
            aggr:1,
            cr:1,
            catZhida:1,
            lossless:0,
            flag_qc:0,
            p:1,
            n:10,
            // w: '%E5%91%A8%E6%9D%B0%E4%BC%A6',
            w:'周杰伦',
            g_tk_new_20200303:5381,
            g_tk:5381,
            loginUin:0,
            hostUin:0,
            format:'json',
            inCharset:'utf8',
            outCharset:'utf-8',
            notice:0,
            platform:'yqq.json',
            needNewCode:0
        }
        this.sReq(params)
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