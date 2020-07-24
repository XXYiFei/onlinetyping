<template>
  <div id="welcome">
    <button class="start" @click="showtyping">开始测试</button>
    <v-typing></v-typing>
  </div>
</template>

<script>
import typing from "../Typing/Typing";

export default {
  methods: {
    showtyping() {
      this.$store.dispatch("showtyping");
    }
  },
  components: {
    "v-typing": typing
  }
};
</script>

<style lang="less" scoped>
.start {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  background-color: rgb(108, 169, 248);
  border-radius: 50%;
  border: white dashed 5px;
  color: white;
  font-size: 30px;
  outline: none;
}
.start:hover {
  cursor: pointer;
  width: 220px;
  height: 220px;
  margin: -110px 0 0 -110px;
  font-size: 35px;
}
</style>