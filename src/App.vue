<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from './auth';
import { ref } from 'vue';

const isLoggedIn = ref(true)

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesion Cerrada");
    router.push("/login");
  } catch (error) {
    console.log(error)
  }
}

auth.onAuthStateChanged((user) => {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})
</script>

<template>

  <div>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/registro">Register</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <button v-if="isLoggedIn" @click="logout">Cerrar sesión</button>
  </div>
  <RouterView></RouterView>
</template>