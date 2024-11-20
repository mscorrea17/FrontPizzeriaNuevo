<script setup>
import { ref, onMounted } from 'vue';
import PizzaCard from '../components/PizzaCard.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

const pizzas = ref([]);
const loading = ref(true);
const error = ref(null);
const cartRef = ref(null);

onMounted(async () => {
  try {
    // Simular datos de la API
    pizzas.value = [
    {
        id: 1,
        name: 'Pizza Margherita',
        description: 'Tomate, mozzarella, albahaca',
        price: 25000,
        image: '/images/tomate.png'
      },
      {
        id: 2,
        name: 'Pizza Pepperoni',
        description: 'Tomate, mozzarella, pepperoni',
        price: 28000,
        image: '/images/peperoni.png'
      },
      {
        id: 3,
        name: 'Pizza Hawaiana',
        description: 'Tomate, mozzarella, jamón, piña',
        price: 27000,
        image: '/images/Hawaiana.png'
      },
      {
        id: 4,
        name: 'Pizza Napolitana',
        description: 'Salsa de tomate, anchoas, alcaparras, orégano, aceite de oliva',
        price: 26000,
        image: '/images/napolitana.png'
      },
      {
        id: 5,
        name: 'Pizza Cuatro Quesos',
        description: 'Variedad de quesos: Mozzarella, parmesano, gorgonzola, queso crema',
        price: 28000,
        image: '/images/quesos.png'
      },
      {
        id: 6,
        name: 'Pizza Vegetariana',
        description: 'Tomate, pimientos, champiñones, cebolla, aceitunas, mozzarell',
        price: 26000,
        image: '/images/vegetariana.jpg'
      }
    ];
  } catch (e) {
    error.value = 'Error al cargar el menú';
  } finally {
    loading.value = false;
  }
});

const addToCart = (pizza) => {
  if (cartRef.value) {
    cartRef.value.addItem({
      ...pizza,
      quantity: 1
    });
  }
};
</script>

<template>
  <!-- Sección con la imagen de fondo y texto superpuesto -->
  <section class="hero">
    <div class="hero-overlay">
      <div class="hero-text">
        <h1>MENÚ </h1>
      </div>
    </div>
  </section>

  <!-- Contenido principal del menú -->
  <div class="container py-5">
    <h5 class="text-center mb-5">Prueba las mejores pizzas de la ciudad</h5>
    
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>

    <div v-else-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <div v-else class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="pizza in pizzas" :key="pizza.id" class="col">
        <PizzaCard :pizza="pizza" @add-to-cart="addToCart" />
      </div>
    </div>

    <ShoppingCart ref="cartRef" />
  </div>
</template>

<style scoped>
/* Estilo para la sección hero */
.hero {
  background-image: url('/src/assets/Pizza.jpg'); /* Ruta de la imagen */
  background-size: cover;
  background-position: center;
  height: 25vh; /* Altura de la sección */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro para mayor contraste */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.hero .btn {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}
</style>
