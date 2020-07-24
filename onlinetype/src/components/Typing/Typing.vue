<template>
  <transition name="cometyping">
    <div class="typing" v-show="typingshow">
      <div class="navi"></div>
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
      "typingshow"
    ]),
  }
};
</script>

<style lang="less" scoped>
</style>