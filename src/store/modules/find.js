import {getCateGoods} from '@/utils/api'
export default {
    namespaced : true,
    state : {
        allGoods : {},
        findlist : []
    },
    getters : {
        num : (state)=>{
            if(state.findlist!==[]){
                // console.log(state.findlist)
                return Math.floor(state.findlist.length/3)
            }else{
                console.log(state)
                return 3
            }   
        }
    },
    mutations : {
        update(state,payload){
            state.allGoods[payload.key]=payload.value
            state.findlist = payload.value
        },
        updateList(state,payload){
            state.findlist = state.allGoods[payload]
        }
    },
    actions : {
        goUpdate(store,payload){
            // console.log(payload)
            getCateGoods(payload).then(res=>{
                let data = {
                    key : payload.cate,
                    value : res
                }
                // console.log(res)
                store.commit('update',data)
            })
        }  
    } 
}