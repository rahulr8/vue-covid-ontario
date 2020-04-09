<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DataIndicators msg="This is a data indicator" />
  </div>
</template>

<script>
import DataIndicators from "./components/DataIndicators.vue";

export default {
  name: "App",
  components: {
    DataIndicators
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
