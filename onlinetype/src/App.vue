<template>
  <div id="app">
    <v-typing></v-typing>
    <router-view/>
  </div>
</template>

<script>
import Typing from './components/Typing/Typing'

export default {
  components:{
    'v-typing':Typing
  }
}
</script>

<style>

</style>
