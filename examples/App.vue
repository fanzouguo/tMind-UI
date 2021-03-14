<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="tMind-UI 组件测试页面"/>
  <colorPicker v-model="currColor"></colorPicker>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      currColor: '#000000'
    };
  }
};
</script>

<style lang="scss">
@import './.libTemp/tmindUi.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
