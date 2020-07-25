<template>
  <div class="test">
    <div id="test-input">
      <div class="text" v-for="index of linenum" :key="index">
        <span
          class="word"
          v-for="(value,indexx) in text[index-1]"
          :key="indexx"
          :class="{rightcolor:wordcompare(index,indexx)==2,wrongcolor:wordcompare(index,indexx)==1}"
        >
          {{value}}
          <span v-if="value==' '">&nbsp;</span>
        </span>
        <input
          :id="inputText(index)"
          class="inputtext"
          type="text"
          onpaste="return false"
          autocomplete="off"
          v-model="inputtext[index-1]"
          @keydown="timestart"
          @keydown.8="adddelettimes"
          @keyup="finishcheck(index)"
          maxlength="53"
        />
      </div>
    </div>
    <div class="info">
      <div>
        <span v-if="hourx<10">0</span>
        {{hourx}}:
        <span v-if="minutesx<10">0</span>
        {{minutesx}}:
        <span v-if="secondx<10">0</span>
        {{secondx}}:
        <span v-if="millisec<10">0</span>
        {{millisec}}
      </div>
      <div>总打字数:{{totalwords}}</div>
      <div>退格:{{delettimes}}</div>
      <div>有效打字率:{{rightpercent}}%</div>
      <button @click="timeclear">重新开始</button>
    </div>
  </div>
</template>
<script >
import { mapGetters, mapActions } from "vuex";
export default {
  updated() {
    if (this.inputtext.toString() === this.text.toString()) {
      //判断打字是否完成，完成则结束计时
      clearInterval(this.nowinterval);
    }
  },
  computed: {
    ...mapGetters([
      "text",
      "hourx",
      "minutesx",
      "secondx",
      "millisec",
      "nowinterval",
      "delettimes",
      "totalwords",
      "rightpercent",
      "typingshow",
    ]),
    inputtext: {
      //用户输入的文本
      get() {
        return this.$store.getters.inputtext;
      },
      set(v) {
        // 使用vuex中的mutations中定义好的方法来双向绑定
        this.$store.commit("SET_INPUTTEXT", v);
      },
    },
    linenum: {
      //行数
      get() {
        return this.$store.getters.text.length;
      },
    },
  },
  methods: {
    ...mapActions(["timestart", "timeclear", "adddelettimes"]),
    wordcompare(index, indexx) {
      //比较文本与输入的内容
      if (this.inputtext[index - 1][indexx] !== undefined) {
        if (this.inputtext[index - 1][indexx] != this.text[index - 1][indexx]) {
          return 1; //错误显示红色
        } else {
          return 2; //正确显示绿色
        }
      }
    },
    inputText(index) {
      return "inputtext" + index;
    },
    finishcheck(index) {
      //自动跳转到下一个input
      let nextindex = index+1;
      let inputText = "inputtext" + nextindex;
      if (this.inputtext[index - 1].length == 53) {
        if (index < this.$store.getters.text.length) {
          document.getElementById(inputText).focus();
        }
      }
    },
  },
};
</script>