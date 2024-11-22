<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/');
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container">
      <!-- Imagen antes del texto -->
      <router-link class="navbar-brand d-flex align-items-center" to="/Inicio">
        <img src="/images/descarga.png" alt="Logo" class="navbar-logo me-2" />
        CECEP PIZZERIA
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto d-flex justify-content-center">
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/Inicio">Inicio</router-link>
          </li>
          <li class="nav-item mx-4">
            <a class="nav-link" href="/Menu">Menú</a>
          </li>
>
        </ul>
        <button class="btn btn-outline-light ms-auto" @click="goToLogin">Cerrar Sesion</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background-color: black !important; /* Fondo negro */
  border-bottom: 3px solid rgba(68, 0, 255, 0.1); /* Línea decorativa opcional */
}

.navbar-logo {
  height: 40px; /* Ajusta el tamaño del logo */
  width: auto; /* Mantén la proporción de la imagen */
}

.nav-link {
  font-size: 18px; /* Aumenta el tamaño del texto */
  color: white !important; /* Asegura que el texto sea visible */
}

.navbar-nav {
  gap: 3rem; /* Espaciado entre opciones del menú */
}

</style>
