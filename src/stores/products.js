import { defineStore } from "pinia";
import axios from "axios";
export const useProducts = defineStore("products", {
    state: () => ({
        products: null,
        total: 0,
    }),
    actions: {
        async getProducts() {
           try {
            const res = await axios({
                method:'GET',
                url:`${import.meta.env.VITE_BASE}products/?offset=0&limit=10&products_id=0`,
                headers:{
                    accept: 'application/json'
                }
            })
            this.products = res.data.products
            this.total = res.data.total
           } catch (error) {
            console.log(error);
           }
        }

    },
    getters: {
    },
});
