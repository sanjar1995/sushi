<template>
    <div class="admin-wrapper products" v-if="products">
        <h1 class="products__title">Products</h1>
        <div class="scroll-table products__table">
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th class="products__table-id">ID</th>
                        <th class="products__table-category">Категория</th>
                        <th>Цена</th>
                        <th>Вес</th>
                        <th> Дата Создание </th>
                        <th> Дата Изменении </th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            <div class="scroll-table-body">
                <table>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                            <td>
                                <img src="@/assets/images/Combo-Filadelfia.png" alt="" class="products__img">
                                <span>{{product.name}}</span>
                            </td>
                            <td class="products__table-id">{{product.id}}</td>
                            <td class="products__table-category">{{product.category_name}}</td>
                            <td>{{product.price}} рубль</td>
                            <td>{{ product.amount }} г</td>
                            <td>{{new Date(product.created_at).toLocaleDateString()}}</td>
                            <td>{{new Date(product.updated_at).toLocaleDateString()}}</td>
                            <td class="table__buttons">
                                <button class="table__btn"><img src="@/assets/images/delete.png" alt=""></button>
                                <button class="table__btn"><img src="@/assets/images/edit.png" alt=""></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProducts } from "@/stores/products.js";
import {ref, computed} from 'vue'
const productsStore = useProducts()
productsStore.getProducts()
const products = computed(()=> productsStore.products)
</script>

<style lang="scss" scoped></style>