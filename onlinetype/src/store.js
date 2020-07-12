/**
 * vuex配置
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    text: 'ltt is very nb',  //打字文本
    inputtext: '',//用户输入内容
    hourx: 0,     //时
    minutesx: 0,  //分
    secondx: 0,   //秒
    millisec: 0,  //毫秒
    nowinterval: 0,  //保存当前interval
    delettimes: 0,  //退格次数
    totalwords: 0,   //总打字数
}

var getters = {
    text(state) {
        return state.text;
    },
    inputtext(state) {
        return state.inputtext;
    },
    hourx(state) {
        return state.hourx;
    },
    minutesx(state) {
        return state.minutesx;
    },
    secondx(state) {
        return state.secondx;
    },
    millisec(state) {
        return state.millisec;
    },
    nowinterval(state) {
        return state.nowinterval;
    },
    delettimes(state) {
        return state.delettimes;
    },
    totalwords(state) {
        return state.totalwords;
    },
    rightpercent(state) {
        return (((state.totalwords - state.delettimes) / state.totalwords) * 100).toFixed(2)
    }
}

const actions = {
    timestart({ commit, state }) {
        commit('timestart')
    },
    timeupdate({ commit, state }) {
        commit('timeupdate');
    },
    timeclear({ commit, state }) {
        commit('timeclear');
    },
    wordcompare({ commit, state }) {
        commit('wordcompare');
    },
    adddelettimes({ commit, state }) {
        commit('adddelettimes');
    }

}

const mutations = {

    timestart(state) {  //启动计时
        state.totalwords++;
        if (state.nowinterval == 0) {  //判断interval是否存在,若存在则不启动新的计时
            state.nowinterval = setInterval(function () {
                state.millisec++;
                if (state.millisec === 100) {
                    state.millisec = 0;
                    state.secondx++;
                    if (state.secondx === 60) {
                        state.secondx = 0;
                        state.minutesx++;
                        if (state.minutesx === 60) {
                            state.minutesx = 0;
                            state.hourx++;
                        }
                    }
                }
            }, 10);
        }
    },
    timeclear(state) {  //重新开始
        state.hourx = 0;
        state.minutesx = 0;
        state.secondx = 0;
        state.millisec = 0;
        state.inputtext = '';
        state.delettimes = 0;
        state.totalwords = 0;
        clearInterval(state.nowinterval);
        state.nowinterval = 0;
    },
    wordcompare(index) {  //比较文本与输入的内容
        if (state.inputtext[index] != null) {
            if (state.inputtext[index] != state.text[index]) {
                return 1;
            }
            else {
                return 2;
            }
        }
    },
    adddelettimes(state) {  //记录退格次数
        state.delettimes++;
    }

}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store;