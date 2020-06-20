import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import song from './modules/song'
import cart from './modules/cart'

const store = new Vuex.Store({
    modules: {
        song,
        cart
    }
})

export default store