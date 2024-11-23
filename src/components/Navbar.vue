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
      <router-link class="navbar-brand d-flex align-items-center" to="/Inicio">
        <img src="/images/descarga.png" alt="Logo" class="navbar-logo me-2" />
        <span class="brand-text">CECEP PIZZERIA</span>
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
        <button class="btn custom-btn ms-3" @click="goToLogin">Cerrar Sesión</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background: linear-gradient(90deg, #000000, #434343);
  border-bottom: 3px solid #ffffff1a;
  padding: 0.8rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  height: 45px;
  width: auto;
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: rotate(-5deg) scale(1.1);
}

.brand-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.navbar-nav {
  gap: 2.5rem;
}

.nav-link {
  font-size: 1.1rem;
  color: white !important;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
  color: #ffcc00 !important;
  transform: translateY(-3px);
}

.nav-link:active {
  transform: scale(0.9);
  color: #ff5500 !important;
}

.custom-btn {
  background-color: transparent;
  border: 2px solid #ffcc00;
  color: #ffcc00;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-btn:hover {
  background-color: #ffcc00;
  color: black;
}

.custom-btn:active {
  transform: scale(0.95);
}
</style>
