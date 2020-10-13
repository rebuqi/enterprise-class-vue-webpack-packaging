import Vue from 'vue'
import Vuex from 'vuex'
import video from 'video/index'
import user from 'user/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        video,
        user
    },
    plugins: [createPersistedState()]
})
