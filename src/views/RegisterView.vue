<script setup>
import { createUserWithEmailAndPassword, auth } from '@/auth';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        console.log('usuario registrado', user);
        email.value = "";
        password.value = "";
       
    } catch (error) {
        console.log(error)
    }
}
</script>


<template>

    <div>
        <h1>Registro</h1>
        <input type="email" v-model="email" placeholder="Correo Electrónico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="register">Registrarse</button>
    </div>

</template>