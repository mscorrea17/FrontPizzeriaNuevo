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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/Inicio">Inicio</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Menu">Menú</a>
          </li>
        </ul>
        <button class="btn btn-outline-light ms-3" @click="goToLogin">Cerrar Sesión</button>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.custom-navbar {
  background-color: black !important; 
  border-bottom: 3px solid rgba(68, 0, 255, 0.1); 
}

.navbar-logo {
  height: 40px; 
  width: auto; 
}

.nav-link {
  font-size: 18px;
  color: white !important; 
}

.navbar-nav {
  gap: 3rem;
}
.nav-link:hover {
  color: #ffcc00 !important;
}

.nav-link:active {
  transform: scale(0.95); 
  color: #ff0000 !important; 
}

</style>
