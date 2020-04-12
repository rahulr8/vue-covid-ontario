<template>
  <div class="graphs">
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
  name: "GenderGraph",
  components: {
    GChart
  },
  data() {
    return {
      mounted: false,
      chartData: [
        ["Gender", "Cases"],
        ["Female", 3609],
        ["Male", 2997]
      ],
      chartOptions: {
        chart: {
          title: "Cases by Gender"
        }
      }
    };
  },
  methods: {
    ...mapGetters(["femaleCases", "maleCases"])
  },
  created() {
    this.mounted = true;
  }
};
</script>
