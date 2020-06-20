import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import song from './modules/song'
import cart from './modules/cart'
import find from './modules/find'

const store = new Vuex.Store({
    modules: {
        song,
        cart,
        find
    }
})

export default store