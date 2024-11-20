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
    <button class="btn btn-primary position-fixed top-0 end-0 m-3" @click="isCartOpen = !isCartOpen">
      <i class="bi bi-cart"></i>
      <span class="badge bg-danger ms-1" v-if="cartItems.length">{{ cartItems.length }}</span>
    </button>

    <div class="offcanvas offcanvas-end" :class="{ show: isCartOpen }" tabindex="-1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Carrito de Compras</h5>
        <button type="button" class="btn-close" @click="isCartOpen = false"></button>
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
            <h4>Total: ${{ total.toFixed(2) }}</h4>
            <button class="btn btn-success w-100" @click="checkout">
              Proceder al pago
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>