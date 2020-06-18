import fetch from '../../utils/fetch1'

const studyModule = {
    namespaced : true,
    state : {
        msg : 2001,
        cnodeList : []
    },
    getters : {
        msg2 : function(state){
            return state.msg * 100
        }
    },
    mutations : {
        updataMsg : function(state,payload){
            state.msg += payload
        },
        updataList : function(state,payload){
            // console.log(payload)
            state.cnodeList = payload
        }
    },
    actions : {
        asnycMsg : function(store,payload){
            store.commit('updataMsg',payload)
        },

        send : function(store,payload){
            fetch({
                url : '/topics',
                method : "GET",
                params : payload
            }).then((res)=>{
                // console.log(res)
                store.commit('updataList',res)
            })
        }
    }
}

export default studyModule