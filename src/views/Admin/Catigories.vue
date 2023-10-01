<template>
    <div class="admin-wrapper catigories">
        <BtnAdd @click="add = true" />
        <Form v-if="add || edit" @closeForm="edit = add = false" @PostOrPut="addCatigories($event)" />
        <div class="admin-categories" v-else>
            <div class="scroll-table" v-if="catigories">
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>ID</th>
                            <th>Дата Создание</th>
                            <th>Дата Изменении</th>
                            <th> </th>
                        </tr>
                    </thead>
                </table>
                <div class="scroll-table-body">
                    <table>
                        <tbody>
                            <tr v-for="(item, index) in catigories" :key="index">
                                <td>{{ item.name }}</td>
                                <td>{{ item.id }}</td>
                                <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
                                <td>{{ new Date(item.updated_at).toLocaleDateString() }}</td>
                                <td class="table__buttons">
                                    <button class="table__btn" @click="catigoriesStore.delCategory(item.id)"><img
                                            src="@/assets/images/delete.png" alt=""></button>
                                    <button class="table__btn" @click="edit = true"><img src="@/assets/images/edit.png" alt=""></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCategory } from '@/stores/category.js'
import Form from '@/components/Form.vue'
const add = ref(false),
    edit = ref(false)
const catigoriesStore = useCategory()


const addCatigories = ({ uz, ru }) => {
    console.log(uz);
    if (uz != null && ru != null) {
        catigoriesStore.createCatigories(uz, ru, add ? 'POST' : edit ? 'PUT' : '')
    }
}
const catigories = computed(() => catigoriesStore.category)

</script>

<style lang="scss" scoped>

</style>