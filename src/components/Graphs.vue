<template>
  <div v-if="mounted" class="graphs">
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
      :resizeDebounce="500"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { mapGetters } from "vuex";

export default {
  name: "Graphs",
  components: {
    GChart
  },
  data() {
    return {
      mounted: false,
      chartData: [["Age Group", "Cases"]],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },
  computed: {
    ...mapGetters([
      "casesLessThan20",
      "casesIn20s",
      "casesIn30s",
      "casesIn40s",
      "casesIn50s",
      "casesIn60s",
      "casesIn70s",
      "casesIn80s",
      "casesIn90s",
      "casesUnknown"
    ])
  },
  mounted() {
    this.chartData = [
      ["Age Group", "Cases"],
      ["<20", this.$store.getters.casesLessThan20],
      ["20s", this.$store.getters.casesIn20s],
      ["30s", this.$store.getters.casesIn30s],
      ["40s", this.$store.getters.casesIn40s],
      ["50s", this.$store.getters.casesIn50s],
      ["60s", this.$store.getters.casesIn60s],
      ["70s", this.$store.getters.casesIn70s],
      ["80s", this.$store.getters.casesIn80s],
      ["90s", this.$store.getters.casesIn90s],
      ["Unknown", this.$store.getters.casesUnknown]
    ];
    this.mounted = true;
  }
};
</script>
