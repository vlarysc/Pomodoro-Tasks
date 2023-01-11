<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="description"
        />
      </div>
      <div class="column">
        <Temporizador @finished="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Formulario",
  emits: ["saveTask"],
  components: {
    Temporizador,
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {
    finishTask(temp: number): void {
      this.$emit("saveTask", {
        duration: temp,
        description: this.description,
      });
      this.description = "";
    },
  },
});
</script>

<style>
.formulario {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>
