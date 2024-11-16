<script setup>
import { auth, signInWithEmailAndPassword } from '@/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loginEmail = ref('');
const loginPassword = ref('');

const login = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
        const userLogin = userCredential.user
        console.log('usuario logion', userLogin)
        router.push("/");
    } catch (error) {
        console.log(error)
        alert('Ingreso mal su email y/o contraseña');
    }
}

</script>

<template>
    
    <div>
        <h1>Login</h1>
        <input type="email" v-model="loginEmail" placeholder="Correo Electrónico">
        <input type="password" v-model="loginPassword" placeholder="Contraseña">
        <button @click="login">Login</button>
    </div>

</template>