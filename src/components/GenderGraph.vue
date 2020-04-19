<template>
  <div class="graphs">
    <h2>Cases by Gender</h2>
    <GChart
      type="ColumnChart"
      :data="chartData()"
      :options="chartOptions"
      :resizeDebounce="500"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

import { ref } from "@vue/composition-api";

export default {
  components: {
    GChart,
  },
  setup(_, context) {
    const femaleCases = ref(() => context.root.$store.getters.femaleCases);
    const maleCases = ref(() => context.root.$store.getters.maleCases);

    const chartData = ref(() => [
      ["Gender", "Cases"],
      ["Female", femaleCases.value()],
      ["Male", maleCases.value()],
    ]);
    const chartOptions = ref({
      chart: {
        title: "Cases by Gender",
      },
    });

    return { femaleCases, maleCases, chartData, chartOptions };
  },
};
</script>
