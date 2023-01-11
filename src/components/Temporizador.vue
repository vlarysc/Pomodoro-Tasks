<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :temp="temp" />
    <button class="button" @click="start" :disabled="started">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="stop" :disabled="!started">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
export default defineComponent({
  name: "Temporizador",
  emits: ["finished"],
  components: {
    Cronometro,
  },
  data() {
    return {
      temp: 0,
      refTemp: 0,
      started: false,
    };
  },
  computed: {
    tempDecresced(): string {
      return new Date(this.temp * 1000).toISOString().substr(11, 8);
    },
  },
  methods: {
    start() {
      this.started = true;
      this.refTemp = setInterval(() => {
        this.temp++;
      }, 1000);
    },
    stop() {
      this.started = false;
      clearInterval(this.refTemp);
      this.$emit("finished", this.temp);
      this.temp = 0;
    },
  },
});
</script>

<style scoped></style>
