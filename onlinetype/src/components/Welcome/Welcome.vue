<template>
    <div>
        <button class="start" @click="showtyping">开始测试</button>
        <v-typing></v-typing>
    </div>
    
    
</template>

<script>
import typing from '../Typing/Typing'

export default {
    methods:{
        showtyping(){
            this.$store.dispatch('showtyping');
        }
    },
    components:{
        'v-typing':typing
    }
}
</script>

<style lang="less" scoped>
.start{
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;
    background-image: linear-gradient(to bottom left, rgb(118, 118, 252), rgb(114, 241, 114));
    border-radius: 100px;
    border: 0px;
}
</style>