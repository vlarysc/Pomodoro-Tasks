<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <Cronometro :temp="task.duration" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import ITask from "@/interfaces/ITask";
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";
export default defineComponent({
  name: "Task",
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    },
  },
  components: {
    Cronometro,
    Box,
  },
});
</script>

<!-- <style scoped>
.box {
  background-color: #faf0ca;
}
</style> -->
