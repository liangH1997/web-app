import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import song from './modules/song'
import study from './modules/study'

const store = new Vuex.Store({
    modules: {
        song,
        study
    }
})

export default store