import types from '../types.js'

const state = {
	buttonnum:0
}

const getters = {   
	buttonnum(state) {
        return state.buttonnum;
    },
}

const actions = {
	changto1({ commit, state }) {
        commit(types.CHANG_TO_1)
	},
	changto2({ commit, state }) {
        commit(types.CHANG_TO_2)
	},
	changto3({ commit, state }) {
        commit(types.CHANG_TO_3)
	},
	changto4({ commit, state }) {
        commit(types.CHANG_TO_4)
	},
	changto5({ commit, state }) {
        commit(types.CHANG_TO_5)
	},
	changto6({ commit, state }) {
        commit(types.CHANG_TO_6)
	},
	changto7({ commit, state }) {
        commit(types.CHANG_TO_7)
	},
	changto8({ commit, state }) {
        commit(types.CHANG_TO_8)
    },
}

const mutations = {
	[types.CHANG_TO_1](state) {
		state.buttonnum=1
	},
	[types.CHANG_TO_2](state) {
		state.buttonnum=2
	},
	[types.CHANG_TO_3](state) {
		state.buttonnum=3
	},
	[types.CHANG_TO_4](state) {
		state.buttonnum=4
	},
	[types.CHANG_TO_5](state) {
		state.buttonnum=5
	},
	[types.CHANG_TO_6](state) {
		state.buttonnum=6
	},
	[types.CHANG_TO_7](state) {
		state.buttonnum=7
	},
	[types.CHANG_TO_8](state) {
		state.buttonnum=8
	},
}
export default {
	state,
	getters,
	actions,
	mutations
}

