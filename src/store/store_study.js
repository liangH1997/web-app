import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state : {
        msg : 2001
    },
    getters : {
        msg2 : function(state){
            return state.msg*10
        }
    },
    mutations : {
        change : function(state,payload){
            state.msg += payload
        }
    },
    actions : {
        asnycMsg : function(store,payload){
            store.commit('change',payload)
        }
    }
})

export default store