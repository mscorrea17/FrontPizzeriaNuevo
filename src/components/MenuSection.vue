<script setup>
import { ref, onMounted } from 'vue'

const pizzas = ref([])

const fetchPizzas = async () => {
  try {
    // Simulación de API
    pizzas.value = [
      {
        id: 1,
        name: 'Margherita',
        price: 25000,
        description: 'Tomate, mozzarella y albahaca',
        image: '/images/tomate.png' // Imagen para Pizza Margherita
      },
      {
        id: 2,
        name: 'Pepperoni',
        price: 28000,
        description: 'Pepperoni y mozzarella',
        image: '/images/peperoni.png' // Imagen para Pizza Pepperoni
      },
      {
        id: 3,
        name: 'Hawaiana',
        price: 27000,
        description: 'Jamón, piña y mozzarella',
        image: '/images/hawaiana.png' // Imagen para Pizza Hawaiana
      }
    ]
  } catch (error) {
    console.error('Error al cargar el menú:', error)
  }
}

onMounted(fetchPizzas)
</script>

<template>
  <section id="menu" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">Pizzas Recomendadas</h2>
      <div class="row">
        <div v-for="pizza in pizzas" :key="pizza.id" class="col-md-4 mb-4">
          <div class="card">
            <img :src="pizza.image" :alt="pizza.name" class="card-img-top pizza-image" />
            <div class="card-body">
              <h5 class="card-title">{{ pizza.name }}</h5>
              <p class="card-text">{{ pizza.description }}</p>
              <p class="card-text"><strong>${{ pizza.price.toLocaleString() }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo para las imágenes de las pizzas */
.pizza-image {
  width: 100%; /* Ocupa todo el ancho del contenedor */
  height: 200px; /* Altura fija para todas las imágenes */
  object-fit: cover; /* Asegura que las imágenes mantengan proporción */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
