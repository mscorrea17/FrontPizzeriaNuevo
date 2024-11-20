<template>
  <div class="card">
    <img :src="pizza.image" alt="Pizza" class="card-img-top pizza-image" />
    <div class="card-body">
      <h5 class="card-title">{{ pizza.name }}</h5>
      <p class="card-text">{{ pizza.description }}</p>
      <p class="card-text"><strong>${{ pizza.price.toLocaleString() }}</strong></p>
      <button class="btn btn-primary" @click="$emit('add-to-cart', pizza)">Agregar al Carrito</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pizza: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Asegurar que todas las imágenes sean del mismo tamaño */
.pizza-image {
  width: 100%; /* Ocupa todo el ancho del contenedor */
  height: 200px; /* Altura fija */
  object-fit: cover; /* Mantiene la proporción y recorta si es necesario */
  border-radius: 5px; /* Opcional: bordes redondeados */
}
</style>
