import types from '../types.js'

const state = {
    text: '夏老板太强了',  //打字文本
    inputtext:'',
    hourx: 0,     //时
    minutesx: 0,  //分
    secondx: 0,   //秒
    millisec: 0,  //毫秒
    nowinterval: 0,  //保存当前interval
    delettimes: 0,  //退格次数
    totalwords: 0,   //总打字数
    typingshow:false
}

const getters = {
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
    typingshow(state) {
        return state.typingshow;
    },
    rightpercent(state) {
        return (((state.totalwords - state.delettimes) / state.totalwords) * 100).toFixed(2)
    }
}

const actions = {
    timestart({ commit, state }) {
        commit(types.TIME_START)
    },
    timeclear({ commit, state }) {
        commit(types.TIME_CLEAR);
    },
    adddelettimes({ commit, state }) {
        commit(types.ADD_DELETTIMES);
    },
    showtyping({commit,state}){
        commit(types.SHOW_TYPING);
    }

}

const mutations = {
    [types.TIME_START](state) {  //启动计时
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
    [types.TIME_CLEAR](state) {  //重新开始
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
    [types.ADD_DELETTIMES](state) {  //记录退格次数
        state.delettimes++;
    },
    [types.SHOW_TYPING](state){
        state.typingshow=true;
    },
    SET_INPUTTEXT(state,v){
        state.inputtext=v;
    }
}
export default {
	state,
	getters,
	actions,
	mutations
}