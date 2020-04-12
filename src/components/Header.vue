<template>
  <div class="header">
    <h1 class="text">
      Ontario Covid Tracker
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(27, 244, 0, 0.5032387955182073) 48%,
    rgba(0, 212, 255, 1) 98%
  );
}
</style>
