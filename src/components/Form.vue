<template>
    <form class="admin-form" @submit.prevent="postOrPut(nameRu, nameUz)">
        <h2 class="admin-title">Добавление категории</h2>
        <label class="admin-label">
            <span>Название Категории (RU)</span>
            <input class="admin-input" v-model="nameRu" type="text" placeholder="Название (RU)" required>
        </label>
        <label class="admin-label">
            <span>Название Категории (UZ)</span>
            <input class="admin-input" v-model="nameUz" type="text" placeholder="Название (UZ)" required>
        </label>
        <div class="admin-buttons">
            <button class="btn-ui back" @click.prevent="emit('closeForm')">Назад</button>
            <button class="btn-ui add"> Сохранить </button>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(['PostOrPut','closeForm'])
const nameUz = ref(null),
    nameRu = ref(null)
const postOrPut = (ru, uz) => {
    emit('PostOrPut', { ru, uz })
    nameRu.value = nameUz.value = null
}
</script>

<style lang="scss" scoped></style>