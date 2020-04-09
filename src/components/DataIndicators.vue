<template>
  <div class="data-indicators">
    <div class="">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "DataIndicators",
  props: {
    msg: String
  }
};
</script>
