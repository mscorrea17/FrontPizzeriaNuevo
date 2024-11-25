<script setup>
import { ref, onMounted } from 'vue';
import PizzaCard from '../components/PizzaCard.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import Navbar from '../components/Navbar.vue';

const pizzas = ref([]);
const loading = ref(true);
const error = ref(null);
const cartRef = ref(null);

onMounted(async () => {
  try {
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
        price: 22000,
        image: '/images/napolitana.png'
      },
      {
        id: 5,
        name: 'Pizza Cuatro Quesos',
        description: 'Variedad de quesos: Mozzarella, parmesano, gorgonzola, queso crema',
        price: 23000,
        image: '/images/quesos.png'
      },
      {
        id: 6,
        name: 'Pizza Vegetariana',
        description: 'Tomate, pimientos, champiñones, cebolla, aceitunas, mozzarell',
        price: 22000,
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
  <Navbar />
  <section class="hero">
    <div class="hero-overlay">
      <div class="hero-text">
        <h1 class="display-4 fw-bold title-shadow">MENÚ</h1>
      </div>
    </div>
  </section>

  <div class="container py-5">
    <h5 class="text-center mb-5">¿QUE ESPERAS PARA PROBAR LAS MEJORES PIZZAS DE CALI?</h5>
    
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
.hero {
  background: 
    url('../assets/Pizza.jpg') center/cover;
  background-size: cover;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  background-position: center;
  height: 32.8vh; 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-bottom: 5px solid #fff;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.6); 
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
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.hero .btn {
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  border-radius: 25px;
  background-color: #ff5733;
  color: #fff;
}

.hero .btn:hover {
  background-color: #c0392b;
}

.container h5 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.card img {
  border-radius: 12px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.card-body {
  padding: 1.25rem;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.card:hover .card-body {
  background-color: #f1f1f1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.card-text strong {
  font-weight: bold;
}

.spinner-border {
  border-color: #ff5733;
}

.alert {
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 10px;
}
</style>
