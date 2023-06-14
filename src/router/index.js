import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    // component: HomeView
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/all-bookings",
    name: "allBookings",
    // component: HomeView
    component: () => import("../components/AllBookings.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
