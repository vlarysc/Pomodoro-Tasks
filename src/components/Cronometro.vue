<template>
  <section>
    <strong class="display">{{ tempDecresced }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Cronometro",
  props: {
    temp: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      refTemp: 0,
    };
  },
  computed: {
    tempDecresced(): string {
      return new Date(this.temp * 1000).toISOString().substr(11, 8);
    },
  },
});
</script>

<style>
.display {
  color: var(--text-primary);
}
</style>
