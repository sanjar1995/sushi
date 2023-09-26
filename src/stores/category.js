import { defineStore } from "pinia";
import axios from "axios";
export const useCategory = defineStore("category", {
    state: () => ({
        category: null,
        total: 0,
    }),
    actions: {
        async getCategory() {
            const res = await axios({
                url: `${import.meta.env.VITE_BASE}category/?offset=0&limit=10&category_id=0`,
                method: 'GET',
                headers: {
                    accept: "application/json",
                    "accept-language": `all-ALL`,
                },
            });
            this.category = res.data
            this.total = res.data.total_count
        },
        async createCatigories(nameUz, nameRu) {
            let body = {
                "name": nameUz.value,
                "name_uz": nameRu.value,
                "name_tr": "",
                "name_en": ""
            }
            let res = await axios(`${import.meta.env.VITE_BASE}category`, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem("access_token")}`
                },
                data: body
            })
            this.getCategory()
        }
    },
    getters: {
    },
});
