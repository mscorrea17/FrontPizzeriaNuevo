<script setup>
import { ref, computed } from 'vue';
import CartItem from './CartItem.vue';

const cartItems = ref([]);
const isCartOpen = ref(false);

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const updateQuantity = (id, newQuantity) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
  }
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
};

const addItem = (item) => {
  const existingItem = cartItems.value.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push(item);
  }
  isCartOpen.value = true;
};

const checkout = () => {
  alert('¡Gracias por tu compra!');
  cartItems.value = [];
  isCartOpen.value = false;
};

defineExpose({
  addItem
});
</script>

<template>
  <div class="shopping-cart">
    <button class="btn btn-primary position-fixed top-0 end-0 m-3 rounded-circle shadow-lg" @click="isCartOpen = !isCartOpen">
      <i class="bi bi-cart"></i>
      <span class="badge bg-danger ms-1" v-if="cartItems.length">{{ cartItems.length }}</span>
    </button>

    <div class="offcanvas offcanvas-end" :class="{ show: isCartOpen }" tabindex="-1">
      <div class="offcanvas-header bg-dark text-white">
        <h5 class="offcanvas-title">Carrito de Compras</h5>
        <button type="button" class="btn-close btn-close-white" @click="isCartOpen = false"></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="cartItems.length === 0" class="text-center py-5">
          <i class="bi bi-cart-x display-1"></i>
          <p class="mt-3">Tu carrito está vacío</p>
        </div>
        <template v-else>
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @update-quantity="updateQuantity"
            @remove-item="removeItem"
          />
          <div class="mt-4">
            <h4 class="fw-bold">Total: ${{ total.toFixed(2) }}</h4>
            <button class="btn btn-success w-100 shadow-lg" @click="checkout">
              Generar pedido
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopping-cart {
  z-index: 1050;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1.25rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background-color: #0056b3;
}

.offcanvas-header {
  background-color: #343a40;
}

.offcanvas-title {
  font-weight: 600;
}

.btn-close-white {
  filter: invert(1);
}

.offcanvas-body {
  background-color: #f8f9fa;
  max-height: 70vh;
  overflow-y: auto;
}

.mt-4 h4 {
  font-size: 1.25rem;
}

.btn-success {
  background-color: #28a745;
  font-size: 1.1rem;
  padding: 0.75rem;
  border-radius: 5px;
}

.btn-success:hover {
  background-color: #218838;
}

.shopping-cart .badge {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 1rem;
  font-weight: bold;
}

.card-body {
  padding: 1rem;
}

.card-text {
  font-size: 0.9rem;
}
</style>
