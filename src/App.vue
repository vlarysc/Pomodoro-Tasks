<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': dark }">
    <div class="column is-one-quarter">
      <BarraLateral @altered-mode="changeMode" />
    </div>
    <div class="column is-three-quarter content">
      <Formulário @saveTask="saveTask" />
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
        <Box v-if="emptyList">
          Lista de tarefas vázia, adicione uma nova Tarefa para continuar.
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulário from "./components/Formulario.vue";
import Task from "./components/Task.vue";
import ITask from "./interfaces/ITask";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulário,
    Task,
    Box,
  },
  data() {
    return {
      tasks: [] as ITask[],
      dark: false,
    };
  },
  computed: {
    emptyList(): boolean {
      return this.tasks.length === 0;
    },
  },
  methods: {
    saveTask(task: ITask) {
      this.tasks.push(task);
    },

    changeMode(dark: boolean) {

      this.dark = dark;
    },
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
