<template>
  <div class="data-indicators">
    <DataCard label="Total Cases" v-bind:number="totalCases" type="total" />
    <DataCard label="Active Cases" v-bind:number="activeCases" type="active" />
    <DataCard label="Recovered" v-bind:number="recoveredCases" type="recovery" />
    <DataCard label="Fatalities" v-bind:number="fatalCases" type="fatality" />
  </div>
</template>

<script>
import DataCard from "./DataCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataIndicators",
  components: {
    DataCard
  },
  methods: {
    ...mapActions(["fetchCovidData"])
  },
  computed: {
    ...mapGetters(["activeCases", "recoveredCases", "fatalCases", "totalCases"])
  },
  created() {
    this.fetchCovidData();
  }
};
</script>

<style scoped>
.data-indicators {
  display: flex;
  padding: 2rem;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
