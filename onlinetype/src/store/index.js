import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import test from './modules/test'
import typing from './modules/typing'
import welcome from './modules/welcome'

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		test,
		typing,
		welcome
	}
});

