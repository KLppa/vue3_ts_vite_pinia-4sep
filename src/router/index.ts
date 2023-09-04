import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
const routes: RouteRecordRaw[] = [];

const modules = import.meta.glob("./modules/*.ts", { eager: true });

// 將對象key-value的形式轉化為數組[[k,V],[],[]]
Object.entries(modules).forEach(([k, v]) => {
  routes.push(...v.default);
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
