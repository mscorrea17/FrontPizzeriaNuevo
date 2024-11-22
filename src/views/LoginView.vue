<script setup>
import { ImageList } from '@mui/material';
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

//habilitar/deshabilitar el botón
const isFormValid = computed(() => email.value.trim() !== '' && password.value.trim() !== '')

const handleLogin = () => {
  console.log('Login attempt:', { email: email.value, password: password.value })
  router.push('/Inicio')
}
</script>

<template>
  <div class="form-container">
    <div class="card">
      <div class="card-body">
        <img src="/images/descarga.png" alt="Logo" class="form-logo" width="80">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
            >
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary w-100"
            :disabled="!isFormValid"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor para centrar el formulario */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8)),
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(2, 2, 2, 0.7)),url(/public/images/PizzaLogin.jpg);
  background-size: cover;
  padding: 20px;
}

/* Ajustar el tamaño del formulario */
.card {
  width: 100%;
  max-width: 400px;
  opacity: 0.95;

}


.card-body {
  padding: 20px;
  background: rgb(206, 206, 206);
}
</style>
