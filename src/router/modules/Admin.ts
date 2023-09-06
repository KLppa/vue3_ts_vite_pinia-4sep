import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/admin",
    component: () => import("@/pages/AdminPage.vue"),
    redirect: { name: "Dashboard" },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/pages/admin/DashboardPage.vue"),
      },
      {
        path: "userlist",
        name: "Userlist",
        component: () => import("@/pages/admin/UserListPage.vue"),
      },
    ],
  },
];

export default routes;
