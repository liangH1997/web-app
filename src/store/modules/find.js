export default {
    namespaced : true,
    state : {
        cateGoods : {},
        findlist : []
    },
    getters : {
        num : (state)=>{
            if(state.findlist!==[]){
                // console.log(state.findlist)
                return Math.floor(state.findlist.length/3)
            }else{
                // console.log(state)
                return 3
            }
            // }
            
        }
    },
    mutations : {
        updateCates(state,payload){
            // console.log(payload.key)
            state.cateGoods[payload.key] = payload.value
            // console.log(state.cateGoods[payload.key])
            state.findlist = state.cateGoods[payload.key]
            // console.log(state.findlist)
        },
        updateList(state,payload){
            // console.log(payload)
            state.findlist = state.cateGoods[payload]
            // console.log(state.findlist[payload])
            // console.log(state.cateGoods[payload.key])

        }
    },
    actions : {

    }
}