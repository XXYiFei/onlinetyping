<template>
  <div id="typing" style="text-align: 35px;">
    <div v-if="text">
      <span
        v-for="(value,index) in text"
        :key="index"
        :class="{rightcolor:wordcompare(index)==2,wrongcolor:wordcompare(index)==1}"
        
      >
        {{text[index]}}
        <span v-if="text[index]==' '">&nbsp;</span>
      </span>
      <br />
      <input
        id="inputtext"
        type="text"
        v-model="inputtext"
        style="font-size: 26px; padding: 0; font-family: 'Times New Roman', Times, serif;"
        @keydown="timestart"
        @keydown.8="adddelettimes"
      />
    </div>

    <hr />
    <div>inputtext:{{inputtext}}</div>

    <div>
      计时:
      <span v-if="hourx<10">0</span>
      {{hourx}}:
      <span v-if="minutesx<10">0</span>
      {{minutesx}}:
      <span v-if="secondx<10">0</span>
      {{secondx}}:
      <span v-if="millisec<10">0</span>
      {{millisec}}
      <button @click="timeclear">重新开始</button>
    </div>
    <div>总打字数:{{totalwords}}</div>
    <div>退格:{{delettimes}}</div>
    <div>有效打字率:{{rightpercent}}%</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {  
  updated() {
    if (this.inputtext === this.text) {
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
      "rightpercent" 
    ]),
    inputtext:{
      get(){
        return this.$store.getters.inputtext
      },
      set(v){
        // 使用vuex中的mutations中定义好的方法来双向绑定
          this.$store.commit('SET_INPUTTEXT', v)
      }     
    }
  },
  methods: {
    ...mapActions(["timestart", "timeclear", "adddelettimes"]),
    wordcompare(index) {
      //比较文本与输入的内容
      if (this.inputtext[index] !== undefined) {
        if (
          this.inputtext[index] != this.text[index]
        ) {
          return 1; //错误显示红色
        } else {
          return 2; //正确显示绿色
        }
      }
    }
  }
}

</script>

<style lang="less" scoped>
.rightcolor {
  background-color: green;
  color: white;
}

.wrongcolor {
  background-color: red;
  color: white;
}
</style>