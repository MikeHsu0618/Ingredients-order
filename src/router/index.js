import { createRouter, createWebHistory } from "vue-router";
import ListPage from '../views/list.vue';
import Test from '../views/test.vue'
const routes = [
  {
    path: "/",
    name: "List",
    component: ListPage,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});