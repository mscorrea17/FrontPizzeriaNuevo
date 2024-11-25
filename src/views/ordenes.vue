<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';

// Datos simulados para la tabla
const orders = ref([
  {
    orderNumber: 1,
    customerName: 'Juan Pérez',
    deliveryAddress: 'Calle 123, Ciudad',
    totalValue: 50000,
  },
  {
    orderNumber: 2,
    customerName: 'María González',
    deliveryAddress: 'Carrera 45, Medellín',
    totalValue: 75000,
  },
  {
    orderNumber: 3,
    customerName: 'Carlos Ramírez',
    deliveryAddress: 'Avenida 7, Bogotá',
    totalValue: 60000,
  },
]);
</script>

<template>
  <Navbar />
  <section class="hero">
    <div class="hero-overlay">
      <div class="hero-text">
        <h1 class="display-4 fw-bold title-shadow">ORDENES</h1>
      </div>
    </div>
  </section>

  <div class="container mt-4">
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th># Pedido</th>
            <th>Cliente</th>
            <th>Dirección</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.orderNumber">
            <td>{{ order.orderNumber }}</td>
            <td>{{ order.customerName }}</td>
            <td>{{ order.deliveryAddress }}</td>
            <td>${{ order.totalValue.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Sección hero */
.hero {
  background: url('../assets/Pizza.jpg') center/cover;
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

/* Tabla personalizada */
.table-container {
  max-width: 90%;
  margin: 0 auto;
  overflow-x: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #212121;
  padding: 1rem;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: 'Arial', sans-serif;
}

.custom-table thead {
  background-color:#ffc400;
  color: #212020;
  font-weight: bold;
}

.custom-table th,
.custom-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ffffff;
}

.custom-table tbody tr:hover {
  background-color: #fff7ae; /* Fondo amarillo claro */
  color: black; /* Cambia el texto a negro */
  cursor: pointer;
}

/* Aplica el color negro específicamente a las celdas de la fila */
.custom-table tbody tr:hover td {
  color: black;
}

.custom-table th {
  text-transform: uppercase;
  font-size: 0.9rem;
}

.custom-table td {
  font-size: 0.85rem;
  color: #fff;
}

.custom-table tbody tr:last-child td {
  border-bottom: none;
}

.custom-table td:last-child {
  font-weight: bold;
  color: #ffe100;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #717171;
  margin-bottom: 1rem;
}
</style>
