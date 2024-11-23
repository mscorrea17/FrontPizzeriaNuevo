<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="Inicio-section text-center py-5 bg-dark text-white">
    <div class="container">
      <h1 class="display-4 fw-bold text-shadow">CECEP PIZZERIA</h1>
      <p class="lead mb-4 text-shadow">Las mejores pizzas de la ciudad</p>
      <button class="btn btn-warning btn-lg shadow-lg" @click="goToLogin">Ordenar Ahora</button>
    </div>
  </div>
</template>

<style scoped>
.Inicio-section {
  padding: 120px 0;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8)),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(4, 1, 31, 0.5)),
    url('../assets/Pizza.jpg') center/cover;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.btn-warning {
  background-color: #ffcc00;
  color: #333;
  border: none;
}

.btn-warning:hover {
  background-color: #ffb300;
}

.btn-lg {
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
}

.shadow-lg {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
