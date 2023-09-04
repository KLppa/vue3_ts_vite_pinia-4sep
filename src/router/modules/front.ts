import type { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/Front.vue"),
  },
];

export default routers;
