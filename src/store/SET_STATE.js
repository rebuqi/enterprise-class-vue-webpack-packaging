import _ from 'lodash'

export const SET_STATE = function (state, payload) {
    for (const p in payload) {
        const _state = _.get(state, p)
        if (Array.isArray(_state)) {
            _.set(state, p, _.cloneDeep(payload[p]))
        } else if (typeof _state === 'object') {
            if (payload[p]) {
                const obj = { ..._state, ...payload[p] }
                _.set(state, p, _.cloneDeep(obj))
            } else {
                _.set(state, p, payload[p])
            }
        } else {
            _.set(state, p, payload[p])
        }
    }
}

export const delay = (function () {
    let timer = 0
    return function (callback) {
        clearTimeout(timer)
        timer = setTimeout(callback, 300)
    }
})()
