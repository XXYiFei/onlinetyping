<template>
  <div id="app">
    <v-welcome></v-welcome>
  </div>
</template>

<script>
import welcome from "./components/Welcome/Welcome.vue";

export default {
  components: {
    "v-welcome": welcome
  }
};
</script>

<style>
@import "../static/css/typing.css";
@import "../static/css/test.css";
</style>
