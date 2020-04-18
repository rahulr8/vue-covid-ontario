<template>
  <div class="home">
    <CovidStats />
  </div>
</template>

<script>
// @ is an alias to /src
import CovidStats from "@/components/CovidStats.vue";

export default {
  name: "Home",
  components: {
    CovidStats,
  },
};
</script>
