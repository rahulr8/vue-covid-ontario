<template>
  <div class="graphs">
    <h2>Cases by Acquisition Type</h2>
    <GChart
      v-if="mounted"
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
  name: "AcquisitionTypeGraph",
  components: {
    GChart
  },
  data() {
    return {
      mounted: false,
      chartData: [
        ["Acquisition Type", "Cases"],
        ["Community Spread", 1097],
        ["Travel Related", 1093],
        ["Unknown", 1395],
        ["Neither", 3063]
      ],
      chartOptions: {
        chart: {
          title: "Cases by Acquisition Type"
        }
      }
    };
  },
  methods: {
    ...mapGetters([
      "communitySpreadCases",
      "travelRelatedCases",
      "neitherAcquisitionCases",
      "unknownAcquisitionCases"
    ])
  },
  created() {
    this.mounted = true;
  }
};
</script>
