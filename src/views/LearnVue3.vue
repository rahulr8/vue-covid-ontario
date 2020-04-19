<template>
  <div>
    <!-- When a ref is found in a template, the .value is exposed -->
    <div>Capacity: {{ capacity }}</div>
    <div>Spaces Left: {{ spacesLeft }}</div>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const event = reactive({
      capacity: 10,
      attending: ["John", "Tom", "Jane"],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      }),
    });

    const increaseCapacity = () => {
      event.capacity++;
    };

    // The object returned by setup() is exposed to the template
    // toRefs makes each part of the event object reactive indivudually
    return { ...toRefs(event), increaseCapacity };
  },
};
</script>
