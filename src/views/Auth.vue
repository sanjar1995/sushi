<template>
    <form class="m-auto" @submit.prevent="checkValidate">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" >Log in</label>
            <input type="text" class="form-control" v-model="username">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="userpass" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/stores/auth.js'
const username = ref(null)
const userpass = ref(null)
const authStore = useAuth()
const checkValidate = ()=>{
    authStore.getUsers(username.value,userpass.value)
}
</script>

<style lang="scss" scoped>
form {
    width: 500px;
}
</style>