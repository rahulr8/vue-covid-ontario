<template>
  <div class="data-indicators">
    <DataCard label="Total Cases" number="5759" type="total" />
    <DataCard label="Active Cases" number="2209" type="active" />
    <DataCard label="Recovered" number="2305" type="recovery" />
    <DataCard label="Fatalities" number="200" type="fatality" />
  </div>
</template>

<script>
import DataCard from "./DataCard";
import { mapActions } from "vuex";

export default {
  name: "DataIndicators",
  props: {
    msg: String
  },
  components: {
    DataCard
  },
  methods: {
    ...mapActions(["fetchCovidData"])
  },
  created() {
    this.fetchCovidData();
  }
};
</script>

<style scoped></style>
