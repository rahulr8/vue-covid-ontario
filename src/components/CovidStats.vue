<template>
  <div id="home" class="home-container">
    <Header />
    <DataIndicators />
    <AgeGroupGraph class="graphs-container" />
    <GenderGraph class="graphs-container" />
    <AcquisitionTypeGraph class="graphs-container" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import DataIndicators from "./DataIndicators.vue";
import AgeGroupGraph from "./AgeGroupGraph.vue";
import GenderGraph from "./GenderGraph.vue";
import AcquisitionTypeGraph from "./AcquisitionTypeGraph.vue";

export default {
  name: "CovidStats",
  components: {
    Header,
    DataIndicators,
    AgeGroupGraph,
    GenderGraph,
    AcquisitionTypeGraph,
  },
};
</script>

<style>
.home-container {
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
