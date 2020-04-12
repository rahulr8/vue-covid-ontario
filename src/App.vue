<template>
  <div id="app" class="app-container">
    <Header />
    <DataIndicators />
    <AgeGroupGraph class="graphs-container" />
    <GenderGraph class="graphs-container" />
    <AcquisitionTypeGraph class="graphs-container" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import DataIndicators from "./components/DataIndicators.vue";
import AgeGroupGraph from "./components/AgeGroupGraph.vue";
import GenderGraph from "./components/GenderGraph.vue";
import AcquisitionTypeGraph from "./components/AcquisitionTypeGraph.vue";

export default {
  name: "App",
  components: {
    Header,
    DataIndicators,
    AgeGroupGraph,
    GenderGraph,
    AcquisitionTypeGraph
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
  min-height: 100%vh;
  min-width: 100%vw;

  display: flex;
  flex-direction: column;
}

.graphs-container {
  padding: 2rem;
}
</style>
