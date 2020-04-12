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
  name: "AgeGroupGraph",
  components: {
    GChart
  },
  data() {
    console.log("this.casesUnknown", this.$store.getters.casesUnknown);
    console.log("test", this.test);
    return {
      mounted: false,
      chartData: [
        ["Age Group", "Cases"],
        ["<20", 780],
        ["20s", 868],
        ["30s", 1041],
        ["40s", 1262],
        ["50s", 981],
        ["60s", 634],
        ["70s", 572],
        ["80s", 347],
        ["90s", 157],
        ["Unknown", 6]
      ],
      chartOptions: {
        chart: {
          title: "Cases by Age Group"
        }
      }
    };
  },
  computed: {
    test: {
      get() {
        return this.casesLessThan20();
      }
    }
  },
  methods: {
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
  created() {
    // this.chartData = [
    //   ["Age Group", "Cases"],
    //   ["<20", this.$store.getters.casesLessThan20],
    //   ["20s", this.$store.getters.casesIn20s],
    //   ["30s", this.$store.getters.casesIn30s],
    //   ["40s", this.$store.getters.casesIn40s],
    //   ["50s", this.$store.getters.casesIn50s],
    //   ["60s", this.$store.getters.casesIn60s],
    //   ["70s", this.$store.getters.casesIn70s],
    //   ["80s", this.$store.getters.casesIn80s],
    //   ["90s", this.$store.getters.casesIn90s],
    //   ["Unknown", this.$store.getters.casesUnknown]
    // ];
    this.mounted = true;
  }
};
</script>
