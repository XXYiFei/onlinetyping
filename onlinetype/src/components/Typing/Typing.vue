<template>
  <transition name="cometyping">
    <div class="typing" v-show="typingshow">
      <div class="navi">
        <button :class="{buttonfocused:buttonnum==1}" @click="changto1">1</button>
        <button :class="{buttonfocused:buttonnum==2}" @click="changto2">2</button>
        <button :class="{buttonfocused:buttonnum==3}" @click="changto3">3</button>
        <button :class="{buttonfocused:buttonnum==4}" @click="changto4">4</button>
        <button :class="{buttonfocused:buttonnum==5}" @click="changto5">5</button>
        <button :class="{buttonfocused:buttonnum==6}" @click="changto6">6</button>
        <button :class="{buttonfocused:buttonnum==7}" @click="changto7">7</button>
        <button :class="{buttonfocused:buttonnum==8}" @click="changto8">8</button>
      </div>
      <v-test></v-test>
    </div>
  </transition>
</template>

<script>
import test from "./Test";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    "v-test": test
  },
  computed: {
    ...mapGetters([
      "typingshow",
      "buttonnum"
    ]),
  },
  methods:{
    ...mapActions([
      "changto1",
      "changto2",
      "changto3",
      "changto4",
      "changto5",
      "changto6",
      "changto7",
      "changto8"
    ])
  }
};
</script>

<style lang="less" scoped>
</style>