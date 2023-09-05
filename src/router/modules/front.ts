import type { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/FrontPage.vue"),
  },
];

export default routers;
