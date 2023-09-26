<template>
    <div class="admin-wrapper catigories">
        <BtnAdd @click="add = true" />
        <form @submit.prevent="addCatigories" class="admin-form" v-if="add">
            <h2 class="admin-title">Добавление категории</h2>
            <label class="admin-label">
                <span>Название Категории (RU)</span>
                <input class="admin-input" v-model="nameUz" type="text" placeholder="Название (RU)" required>
            </label>
            <label class="admin-label">
                <span>Название Категории (UZ)</span>
                <input class="admin-input" v-model="nameRu" type="text" placeholder="Название (UZ)" required>
            </label>
            <div class="admin-buttons">
                <button class="admin-btn back" @click="add = false">Назад</button>
                <button class="admin-btn add"> Сохранить </button>
            </div>
        </form>
        <div class="admin-content" v-else>
            content
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCategory } from '@/stores/category.js'
const add = ref(false)
const catigoriesStore = useCategory()
const nameUz = ref(null),
    nameRu = ref(null)

const addCatigories = () => {
    if(nameUz.value != null && nameRu.value != null){
        catigoriesStore.createCatigories(nameUz, nameRu)
        nameUz.value = nameRu.value = null
    }
}
</script>

<style lang="scss" scoped></style>