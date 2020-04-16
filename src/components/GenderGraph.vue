<template>
  <div class="graphs">
    <h2>Cases by Gender</h2>
    <h3>{{ this.femaleCases }}</h3>
    <GChart
      v-if="this.mounted"
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
  data() {
    console.log("this.femaleCases", this.femaleCases);
    return {
      mounted: false,
      chartData: () => {
        console.log("Inside func: ", this.femaleCases);
        return [
          ["Gender", "Cases"],
          ["Female", this.femaleCases],
          ["Male", 2997]
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
  },
  mounted() {
    this.mounted = true;
    this.fetchCovidData();
  }
};
</script>
