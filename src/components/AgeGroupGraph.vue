<template>
  <div class="graphs">
    <h2>Cases by Age Group</h2>
    <GChart type="ColumnChart" :data="chartData()" :options="chartOptions" :resizeDebounce="500" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { reactive, toRefs } from "@vue/composition-api";

export default {
  components: {
    GChart
  },
  setup(_, context) {
    const ageGroupData = reactive({
      casesLessThan20: () => context.root.$store.getters.casesLessThan20,
      casesIn20s: () => context.root.$store.getters.casesIn20s,
      casesIn30s: () => context.root.$store.getters.casesIn30s,
      casesIn40s: () => context.root.$store.getters.casesIn40s,
      casesIn50s: () => context.root.$store.getters.casesIn50s,
      casesIn60s: () => context.root.$store.getters.casesIn60s,
      casesIn70s: () => context.root.$store.getters.casesIn70s,
      casesIn80s: () => context.root.$store.getters.casesIn80s,
      casesIn90s: () => context.root.$store.getters.casesIn40s,
      casesUnknown: () => context.root.$store.getters.casesUnknown,

      chartData: () => [
        ["Age Group", "Cases"],
        ["<20", ageGroupData.casesLessThan20()],
        ["20s", ageGroupData.casesIn20s()],
        ["30s", ageGroupData.casesIn30s()],
        ["40s", ageGroupData.casesIn40s()],
        ["50s", ageGroupData.casesIn50s()],
        ["60s", ageGroupData.casesIn60s()],
        ["70s", ageGroupData.casesIn70s()],
        ["80s", ageGroupData.casesIn80s()],
        ["90s", ageGroupData.casesIn90s()],
        ["Unknown", ageGroupData.casesUnknown()]
      ],
      chartOptions: {
        chart: {
          title: "Cases by Age Group"
        }
      }
    });

    return toRefs(ageGroupData);
  }
};
</script>
