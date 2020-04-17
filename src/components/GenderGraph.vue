<template>
  <div class="graphs">
    <h2>Cases by Gender</h2>
    <h3>{{ this.femaleCases }}</h3>
    <GChart
      type="ColumnChart"
      :data="this.chartData()"
      :options="chartOptions"
      :resizeDebounce="500"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GenderGraph",
  components: {
    GChart
  },
  // Use functions instead of keys to maintain reactivity (e.g. chartData)
  data() {
    return {
      mounted: false,
      chartData() {
        return [
          ["Gender", "Cases"],
          ["Female", this.femaleCases],
          ["Male", this.maleCases]
        ];
      },
      chartOptions: {
        chart: {
          title: "Cases by Gender"
        }
      }
    };
  },
  methods: {
    ...mapActions(["fetchCovidData"])
  },
  computed: {
    ...mapGetters(["femaleCases", "maleCases"])
  }
};
</script>
