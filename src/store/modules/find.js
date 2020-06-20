export default {
    namespaced : true,
    state : {
        cateGoods : {}
    },
    mutations : {
        updateCates(state,payload){
            state.cateGoods[payload.key] = payload.value
            console.log(state.cateGoods)
        }
    },
    actions : {

    }
}