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
.scroll-table-body {
    height: 300px;
    overflow-x: auto;
    margin-top: 0px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.scroll-table table {
    width: 100%;
    table-layout: fixed;
    border: none;
}

.scroll-table thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #d8d8d8;
    font-size: 14px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.scroll-table tbody td {
    text-align: left;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
}

.scroll-table tbody tr:nth-child(even) {
    background: #f3f3f3;
}

/* Стили для скролла */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.table__buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.table__btn img {
    width: 30px;
}
</style>