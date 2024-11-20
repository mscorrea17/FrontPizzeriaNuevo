<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['updateQuantity', 'removeItem']);
</script>

<template>
  <div class="cart-item border-bottom py-3">
    <div class="row align-items-center">
      <div class="col-3">
        <img :src="item.image" :alt="item.name" class="img-fluid rounded">
      </div>
      <div class="col-5">
        <h5 class="mb-1">{{ item.name }}</h5>
        <p class="mb-0 text-muted">{{ item.description }}</p>
        <p class="mb-0 text-primary">${{ item.price }}</p>
      </div>
      <div class="col-2">
        <div class="input-group">
          <button class="btn btn-outline-secondary" @click="emit('updateQuantity', item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
          <input type="number" class="form-control text-center" v-model="item.quantity" min="1">
          <button class="btn btn-outline-secondary" @click="emit('updateQuantity', item.id, item.quantity + 1)">+</button>
        </div>
      </div>
      <div class="col-2 text-end">
        <button class="btn btn-danger btn-sm" @click="emit('removeItem', item.id)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>