<template>
  <div id="welcome">
    <div class="former">
      <div class="form-font">账号</div>
      <div class="inner">
        <input type="text" placeholder="请输入账号" />
        <span class="icon icon-account"></span>
      </div>
      <div class="form-font">密码</div>
      <div class="inner">
        <input type="text" placeholder="请输入密码" />
        <span class="icon icon-password"></span>
      </div>
      <div>
        <input type="button" value="登录" class="form-button button-login" @click="showtyping"/>
      </div>
      <div>
        <input type="button" value="注册" class="form-button button-register" />
      </div>
    </div>
    <v-typing></v-typing>
  </div>
</template>

<script>
import typing from "../Typing/Typing";

export default {
  methods: {
    showtyping() {
      this.$store.dispatch("showtyping");
    },
  },
  components: {
    "v-typing": typing,
  },
};
</script>