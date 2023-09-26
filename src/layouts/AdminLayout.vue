<template>
    <div class="admin">
        <aside class="sidebar">
            <a href="" class="logo">
                <img src="@/assets/images/logo.png" alt="">
                Admin Panel
            </a>

            <ul class="sidebar__list">
                <li v-for="(link, index) in links" :key="index">
                    <router-link :to="link.url" class="sidebar__link">{{ link.name }}</router-link>
                </li>

            </ul>
        </aside>
        <div class="admin__content">
            <div class="admin__counts">
                <div class="admin__counts-item">
                    <h2 class="admin__counts-title">{{ categoryStore.total }}</h2>
                    <p class="admin__counts-descr">Общее количество категории</p>
                </div>
                <div class="admin__counts-item">
                    <h2 class="admin__counts-title">21</h2>
                    <p class="admin__counts-descr">Общее количество продуктов</p>
                </div>

                <div class="admin__counts-item">
                    <h2 class="admin__counts-title">27</h2>
                    <p class="admin__counts-descr">Общее количество заказов</p>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { useAuth } from "@/stores/auth.js";
import { useCategory } from "@/stores/category.js";
import { onMounted, ref, computed } from 'vue'
const links = ref([
    { url: '/catigories', name: 'Категории' },
    { url: '/products', name: 'Продукты' },
    { url: '/orders', name: 'Заказы' },
])
const authStore = useAuth()
const categoryStore = useCategory()
onMounted(() => {
    authStore.checkAdmin();
    categoryStore.getCategory()
});
</script>














<style lang="scss" scoped></style>