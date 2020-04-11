<template>
  <div id="app" class="app-container">
    <Header />
    <div class="data-graphs-container">
      <DataIndicators msg="9000" class="data-container" />
      <Graphs msg="This is a graph indicator" class="graphs-container" />
    </div>
    <Tables msg="This is a table indicator" class="tables-container" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import DataIndicators from "./components/DataIndicators.vue";
import Graphs from "./components/Graphs.vue";
import Tables from "./components/Tables.vue";

export default {
  name: "App",
  components: {
    Header,
    DataIndicators,
    Graphs,
    Tables
  }
};
</script>

<style>
.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100%vh;
  min-width: 100%vw;

  display: flex;
  flex-direction: column;
}

.data-graphs-container {
  display: flex;
  justify-content: center;
  flex: 1;
}
.tables-container {
  padding: 10rem;
  flex: 1;
}

.data-container {
  padding: 10rem;
}
.graphs-container {
  padding: 10rem;
}
</style>
