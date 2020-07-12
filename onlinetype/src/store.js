/**
 * vuex配置
 */

 import Vue from 'vue'
 import Vuex from 'vuex'

 Vue.use(Vuex);

 var state={
    text: 'ltt is very nb'
 }

 const store = new Vuex.Store({
     state,
 })

 export default store;