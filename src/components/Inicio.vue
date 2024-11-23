<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToMenu = () => {
  router.push('/menu');
};
</script>

<template>
  <div class="Inicio-section text-center py-5 text-white">
    <div class="container">
      <h1 class="display-4 fw-bold title-shadow">CECEP PIZZERIA</h1>
      <p class="lead mb-4">Las mejores pizzas de la ciudad</p>
      <button class="btn custom-btn" @click="goToMenu">Ordenar Ahora</button>
    </div>
  </div>
</template>

<style scoped>
.Inicio-section {
  padding: 120px 0;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9) 100%),
    url('../assets/Pizza.jpg') center/cover;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
}

.title-shadow {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
}

.custom-btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  background-color: white;
  color: black;
  transform: scale(1.05);
}

.custom-btn:active {
  transform: scale(0.95);
  background-color: #ffcc00;
  color: black;
}
</style>
