<script setup>
import { ref, onMounted } from 'vue'

const pizzas = ref([])

const fetchPizzas = async () => {
  try {
    pizzas.value = [
      {
        id: 1,
        name: 'Margherita',
        price: 25000,
        description: 'Tomate, mozzarella y albahaca',
        image: '/images/tomate.png'
      },
      {
        id: 2,
        name: 'Pepperoni',
        price: 28000,
        description: 'Pepperoni y mozzarella',
        image: '/images/peperoni.png'
      },
      {
        id: 3,
        name: 'Hawaiana',
        price: 27000,
        description: 'Jamón, piña y mozzarella',
        image: '/images/hawaiana.png'
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
      <h5 class="text-center mb-5 text-uppercase font-weight-bold">RECOMENDADAS DEL CHEF</h5>
      <div class="row">
        <div v-for="pizza in pizzas" :key="pizza.id" class="col-md-4 mb-4">
          <div class="card shadow-sm border-0 rounded-lg overflow-hidden">
            <img :src="pizza.image" :alt="pizza.name" class="card-img-top pizza-image" />
            <div class="card-body text-center">
              <h5 class="card-title font-weight-bold text-dark">{{ pizza.name }}</h5>
              <p class="card-text text-muted">{{ pizza.description }}</p>
              <p class="card-text text-primary"><strong>${{ pizza.price.toLocaleString() }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pizza-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.card-body {
  background-color: #f8f9fa;
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  color: #333;
}

.card-text {
  font-size: 1rem;
  color: #777;
}

.card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

h5 {
  font-size: 1.5rem;
  color: #333;
}
</style>
