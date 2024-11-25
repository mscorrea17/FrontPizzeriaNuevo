<script setup>
import { ref, computed } from 'vue';
import CartItem from './CartItem.vue';

const cartItems = ref([]);
const isCartOpen = ref(false);
const isModalOpen = ref(false); // Estado para el modal

// Datos del formulario
const formData = ref({
  name: '',
  address: '',
  paymentMethod: 'efectivo',
});

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const updateQuantity = (id, newQuantity) => {
  const item = cartItems.value.find((item) => item.id === id);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
  }
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const clearCart = () => {
  if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
    cartItems.value = [];
  }
};

const addItem = (item) => {
  const existingItem = cartItems.value.find((i) => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({ ...item, quantity: 1 });
  }
  isCartOpen.value = true;
};

const closeCart = () => {
  isCartOpen.value = false;
};

const checkout = () => {
  if (!formData.value.name || !formData.value.address) {
    alert('Por favor completa todos los campos del formulario.');
    return;
  }
  alert(`¡Gracias por tu compra, ${formData.value.name}! Método de pago: ${formData.value.paymentMethod}`);
  cartItems.value = [];
  formData.value = { name: '', address: '', paymentMethod: 'efectivo' }; // Limpiar formulario
  isCartOpen.value = false;
  isModalOpen.value = false; // Cerrar modal
};

defineExpose({
  addItem,
});
</script>

<template>
  <div class="shopping-cart">
    <!-- Botón del carrito -->
    <button
      class="btn btn-primary position-fixed top-0 end-0 m-3 rounded-circle shadow-lg"
      @click="isCartOpen = !isCartOpen"
    >
      <i class="bi bi-cart"></i>
      <span class="badge bg-danger ms-1" v-if="cartItems.length">{{ cartItems.length }}</span>
    </button>

    <!-- Overlay -->
    <div
      v-if="isCartOpen"
      class="cart-overlay"
      @click="closeCart"
    ></div>

    <!-- Menú lateral del carrito -->
    <div class="offcanvas offcanvas-end" :class="{ show: isCartOpen }" tabindex="-1">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Carrito de Compras</h5>
        <button type="button" class="btn-close btn-close-white" @click="closeCart"></button>
      </div>
      <div class="offcanvas-body">
        <div v-if="cartItems.length === 0" class="text-center py-5">
          <i class="bi bi-cart-x display-1 text-muted"></i>
          <p class="mt-3 text-muted">Tu carrito está vacío</p>
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
            <button class="btn btn-success w-100 shadow-lg" @click="isModalOpen = true">
              Generar Pedido
            </button>
            <button class="btn btn-danger w-100 mt-2 shadow-lg" @click="clearCart">Vaciar Carrito</button>
          </div>
        </template>
      </div>
    </div>

    <!-- Modal de confirmación con formulario -->
    <div class="modal fade" :class="{ show: isModalOpen }" tabindex="-1" style="display: block" v-if="isModalOpen">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-modal">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">Confirmar Pedido</h5>
            <button type="button" class="btn-close btn-close-white" @click="isModalOpen = false"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  v-model="formData.name"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Dirección de Entrega</label>
                <textarea
                  id="address"
                  class="form-control"
                  v-model="formData.address"
                  rows="3"
                  placeholder="Ingresa tu dirección"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="payment" class="form-label">Método de Pago</label>
                <select id="payment" class="form-select" v-model="formData.paymentMethod">
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta</option>
                </select>
              </div>
            </form>
            <p class="mt-3 text-center fw-bold">
              ¿Estás seguro de que deseas generar el pedido por un total de <span class="text-success">${{ total.toFixed(2) }}</span>?
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" @click="isModalOpen = false">Cancelar</button>
            <button class="btn btn-success" @click="checkout">Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Overlay styles */
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

/* Modal and other styles */
.modal-content.custom-modal {
  background: linear-gradient(90deg, #434343, #000000);
  color: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.offcanvas {
  z-index: 1050;
}

.offcanvas.show {
  transform: translateX(0);
}
</style>
