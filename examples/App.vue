<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <!-- <colorPicker :value="color" v-on:change="headleChangeColor"></colorPicker> -->
  <tInput></tInput>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      color: '#333'
    };
  },
  methods: {
    headleChangeColor(e) {
      console.log(e); // eslint-disable-line
      this.color = e;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
