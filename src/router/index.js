import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin/Admin.vue";
import Auth from "../views/Auth.vue";
import Homelayout from "../layouts/Homelayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        layout: Homelayout,
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        layout: AdminLayout,
        auth: true
      },
    },
    {
      path: "/catigories",
      name: "catigories",
      component: ()=> import('@/views/Admin/Catigories.vue'),
      meta: {
        layout: AdminLayout,
        auth: true
      },
    },
    {
      path: "/products",
      name: "products",
      component: ()=> import('@/views/Admin/Products.vue'),
      meta: {
        layout: AdminLayout,
        auth: true
      },
    },
    {
      path: "/orders",
      name: "orders",
      component: ()=> import('@/views/Admin/Orders.vue'),
      meta: {
        layout: AdminLayout,
        auth: true
      },
    },
    
    {
      path: "/auth",
      name: "auth",
      component: Auth,
      meta: {
        layout: AuthLayout,
      },
    },
  ],
});

export default router;
