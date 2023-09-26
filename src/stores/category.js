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
            this.category = res.data.categories
            this.total = res.data.total_count
        },
        async createCatigories(nameUz, nameRu, type) {
            let body = {
                "name": nameRu,
                "name_uz": nameUz,
                "name_tr": "",
                "name_en": ""
            }
            let res = await axios(`${import.meta.env.VITE_BASE}category`, {
                method: type,
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem("access_token")}`
                },
                data: body
            })
            this.getCategory()
        },
        async delCategory(id) {
            try {
                let res = await axios(`${import.meta.env.VITE_BASE}category/${id}`, {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("access_token")}`
                    },
                    method: 'DELETE',
                })
                this.getCategory()
            } catch (error) {
                console.log(error);
            }

        }
    },
    getters: {
    },
});
