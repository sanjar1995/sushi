<template>
    <div class="admin-wrapper products" v-if="products && category">
        <h1 class="products__title">Products</h1>
        <form action="" @submit.prevent="asd($event)" class="products__forms" v-if="form">
            <label class="products__label select">
                <span class="products__span">Выберите Категорию</span>
                <select class="products__categories-list" required>
                    <option :value="item.id" v-for="(item, index) in category" :key="index">{{item.name}}</option>
                </select>
            </label>
            <label class="products__label">
                <span class="products__span">Название продукта (RU)</span>
                <input type="text" class="products__input" placeholder="Имя" required>
            </label>
            <label class="products__label">
                <span class="products__span">Название продукта (EN)</span>
                <input type="text" class="products__input" placeholder="Name" required>
            </label>
            <label class="products__label">
                <span class="products__span">Описание (RU)</span>
                <textarea placeholder="Описание" type="text" class="products__descr" required></textarea>
            </label>
            <label class="products__label">
                <span class="products__span">Описание (EN)</span>
                <textarea placeholder="Description" class="products__descr" required></textarea>
            </label>
            <label class="products__label file">
                <span class="products__span">Выберие фото</span>
                <input type="file" class="products__input" required>
            </label>
            <label class="products__label">
                <span class="products__span">Цена (сум)</span>
                <input type="text" class="products__input" required>
            </label>
            <label class="products__label">
                <span class="products__span">Количество (кг)</span>
                <input type="text" class="products__input" required>
            </label>
            <button class="btn-ui back" @click="form = false">Назад</button>
            <button class="btn-ui add"> Сохранить </button>
        </form>
        <div class="scroll-table products__table" v-else>
            <BtnAdd @click="form = true" />
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
                                <img :src="product.image_url" alt="" class="products__img">
                                <span>{{ product.name }}</span>
                            </td>
                            <td class="products__table-id">{{ product.id }}</td>
                            <td class="products__table-category">{{ product.category_name }}</td>
                            <td>{{ product.price }} рубль</td>
                            <td>{{ product.amount }} г</td>
                            <td>{{ new Date(product.created_at).toLocaleDateString() }}</td>
                            <td>{{ new Date(product.updated_at).toLocaleDateString() }}</td>
                            <td class="table__buttons">
                                <button class="table__btn" @click="productsStore.delProduct(product.id)"><img
                                        src="@/assets/images/delete.png" alt=""></button>
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
import { useCategory } from "@/stores/category.js";
import { ref, computed } from 'vue'
const productsStore = useProducts()
productsStore.getProducts()
const products = computed(() => productsStore.products)
const category = computed(() => useCategory().category)
const form = ref(false)
function asd(e){
    console.log(e);
}
</script>

<style lang="scss" scoped></style>