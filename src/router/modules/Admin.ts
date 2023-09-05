import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/admin",
    component: () => import("@/pages/AdminPage.vue"),
  },
];

export default routes;
