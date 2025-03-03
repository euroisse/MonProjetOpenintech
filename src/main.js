import { createApp } from 'vue'
import './output.css'
import App from './App.vue'
import { routes } from "./routes/route";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
