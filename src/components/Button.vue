<template>
  <button class="button" @click="start" :disabled="started">
    <span class="icon">
      <i class="fas fa-play"></i>
    </span>
    <span>play</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
});
</script>

<style></style>
