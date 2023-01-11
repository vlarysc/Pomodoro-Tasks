<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <button class="button" @click="changeMode">{{ textMode }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["alteredMode"],
  data() {
    return {
      dark: false,
    };
  },
  computed: {
    textMode(): string {
      return this.dark === true ? "Modo Claro" : "Modo Escuro";
    },
  },
  methods: {
    changeMode() {
      this.dark = !this.dark;
      this.$emit("alteredMode", this.dark);
    },
  },
});
</script>

<style scoped>
header {
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
