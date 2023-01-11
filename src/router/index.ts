import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Error from '../Error.vue'

const routers: RouteRecordRaw[] = [{
  path: '/',
  name: 'Tarefas',
  component: Error
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers

})

export default router;