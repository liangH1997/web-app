import fetch from "../../utils/fetch"


const songModule = {
    namespaced: true,
    state : {
        songMsg : 1001,
        songList : [],
        singer : ''
    },
    mutations : {
        updataSong : function(state,payload){
            state.songList = payload.list
            state.singer = payload.name
        }
    },
    actions : {
        sReq : function(store,payload){
            console.log(payload)
            fetch({
                url : '/soso/fcgi-bin/client_search_cp',
                method : 'GET',
                params : payload
            }).then((res)=>{
                let data = {
                    name : res.keyword,
                    list : res.song.list
                }
                // console.log(store,data)
                store.commit('updataSong',data)
            })
        }
    },
    getters : {

    }
}

export default songModule