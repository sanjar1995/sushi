import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
export const useAuth = defineStore("auth", {
  state: () => ({
    access_token: null,
    user: null,
    verifyModal: false,
  }),
  actions: {
    async getUsers(login, pass) {
      const authInfo = {
        username: login,
        password: pass,
      };
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
        data: authInfo,
      };
      const res = await axios(`${import.meta.env.VITE_BASE}login`, options);
      this.access_token = res.data.access_token;
      sessionStorage.access_token = this.access_token;
      router.push({ path: "/admin" });
    },
    async checkAdmin() {
      try {
        const res = await axios({
          url: `http://176.57.213.171/users/`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        });
        this.user = res.data;
      } catch (error) {
        this.user = error.response;
      }

      const requireAuth = router.currentRoute.value.meta.auth;
      if (requireAuth && this.user.status == 401) {
        router.push({ path: "/auth" });
        alert("Ro'yxatdan o't!!!");
      } else {
        router.forward();
      }
    },
  },
  getters: {},
});
