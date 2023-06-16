import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/AllHotels.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/all-bookings",
    name: "allBookings",
    component: () => import("../components/AllBookings.vue"),
  },
  {
    path: "/book/:id",
    name: "bookingForm",
    component: () => import("../components/Booking.vue"),
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
