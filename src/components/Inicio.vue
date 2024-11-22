<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToMenu = () => {
  router.push('/menu');
};
</script>

<template>
  <div class="Inicio-section text-center py-5 bg-dark text-white">
    <div class="container">
      <h1 class="display-4 fw-bold">CECEP PIZZERIA</h1>
      <p class="lead mb-4">Las mejores pizzas de la ciudad</p>
      <button class="btn btn-outline-light ms-auto" @click="goToMenu">Ordenar Ahora</button>
    </div>
  </div>
</template>

<style scoped>
.Inicio-section {
  padding: 100px 0;
  background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8)),
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(2, 2, 2, 0.7)),
    url('../assets/Pizza.jpg') center/cover;
}

</style>
