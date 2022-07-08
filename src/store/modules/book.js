const book = {
    state: {
        test: 1
    },
    getters: {
    },
    mutations: {
        'SET_TEST': (state, newTest) => {
            state.test = newTest
        }
    },
    actions: {
        setTest: ({ commit, state }, newTest) => {
            return commit('SET_TEST', newTest)
            //返回一个promise对象
        }
    }
}

export default book