import types from '../types.js'

const state = {
    typingshow:false,
}

const getters = {   
    typingshow(state) {
        return state.typingshow;
    }
}

const actions = {
    showtyping({commit,state}){
        commit(types.SHOW_TYPING);
    }
}

const mutations = {
    [types.SHOW_TYPING](state){
        state.typingshow=true;
    },
}
export default {
	state,
	getters,
	actions,
	mutations
}

