<template>
  <div :class="dataCardClass">
    <div class="data-card-text">{{ label }}</div>
    <div class="data-card-number">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "DataCard",
  props: {
    label: String,
    number: String,
    type: String
  },
  data() {
    return {
      dataCardClass: `data-card data-card-${this.type}`
    };
  }
};
</script>

<style scoped>
.data-card {
  padding: 1rem 2rem;
  margin: 1rem;

  min-width: 8rem;
  font-weight: 700;
  color: black;
  border: 0.1rem inset #1c6ea4;
  border-radius: 2rem;
}

.data-card-total {
  background-color: lightblue;
}
.data-card-active {
  background-color: goldenrod;
}
.data-card-recovery {
  background-color: greenyellow;
}
.data-card-fatality {
  background-color: red;
}
</style>
