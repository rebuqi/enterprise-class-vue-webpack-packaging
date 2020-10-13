import { SET_STATE } from '../SET_STATE'

export default {
    namespaced: true,
    state: () => ({
        currentPlayArr: '' // 示例
    }),
    actions: {
        setCurrentPlayArr({ commit }, currentPlayArr) {
            commit('SET_STATE', { currentPlayArr })
        }
    },
    mutations: {
        SET_STATE: SET_STATE
    }
}
