import types from '../types.js'

const state = {
    text: ['改革开放以来，中国人民用几十年的时间走过了西方几百年时间才走完的工业化城市化道路，迅速成为世界第二大经济体',
           '，不仅在经济上创造了令世界惊叹的“中国奇迹”，也为发展中国家探索出了一种新的发展道路。第一，以经济建设为中心',
           '，推动经济社会全面协调发展。坚持以发展为第一要务，聚精会神搞建设，一心一意谋发展。同时，注重处理好发展平衡',
           '、包容性、可持续性问题，注重处理好改革发展稳定的关系，推进经济社会的全面发展和全面进步。第二，把以公有制为',
           '主体与多种所有制经济协调起来，既发挥公有制经济的主体作用，为人民群众共享发展成果提供制度性保证，又发挥各种',
           '所有制经济的优势，共同推动社会生产力的发展。第三，把社会主义基本制度与市场经济结合起来，实行社会主义市场经',
           '济体制，既尊重市场经济一般规律，充分发挥市场在资源配置中的决定性作用，又坚持以社会主义制度为市场经济的基础',
           '和前提，更好发挥政府作用，有效克服市场失灵风险，保持宏观经济稳定和可持续发展。第四，将“先富”与“共富”衔',
           '接起来，让“先富”激励和带动落后地区、后富群众更快富裕起来，同时坚持“以人民为中心”的发展思想和“共享”的'],  //打字文本
    inputtext:['','','','','','','','',''],
    hourx: 0,     //时
    minutesx: 0,  //分
    secondx: 0,   //秒
    millisec: 0,  //毫秒
    nowinterval: 0,  //保存当前interval
    delettimes: 0,  //退格次数
    totalwords: 0,   //总打字数
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
    rightpercent(state) {  //有效打字率
        if(!state.totalwords){
            return 0;
        }
        return (((state.totalwords - state.delettimes) / state.totalwords) * 100).toFixed(2)
    },
    APM(state){ //手速
        if(!state.totalwords){
            return 0;
        }else{
            let usetime = state.hourx*3600+state.minutesx*60+state.secondx;
            return  ((state.totalwords/usetime)*60).toFixed(2);
        }  
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
    timestop({ commit, state }) {
        commit(types.TIME_STOP);
    }
}

const mutations = {
    [types.TIME_START](state) {  //启动计时
        state.totalwords++;
        if (state.nowinterval == 0 ) {  //判断interval是否存在,若存在则不启动新的计时
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
        state.inputtext = ['','','','','','','','',''];
        state.delettimes = 0;
        state.totalwords = 0;
        clearInterval(state.nowinterval);
        state.nowinterval = 0;
    },
    [types.TIME_STOP](state){
        clearInterval(state.nowinterval);
        state.nowinterval = 0;
    },
    [types.ADD_DELETTIMES](state) {  //记录退格次数
        state.delettimes++;
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