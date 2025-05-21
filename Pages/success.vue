<template>
  <div class="success-page">
    <h1>Parabéns pela ótima compra!</h1>
    <p>Seu pedido foi confirmado com sucesso.</p>

    <NuxtLink to="/">Voltar para a loja</NuxtLink>
  </div>
</template>

<script setup>
import { useCartStore } from "../Stores/cart";
import { onMounted } from "vue";

const cart = useCartStore();

onMounted(() => {
  cart.clearCart?.();
});
</script>

<style scoped>
.success-page {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background: #e6ffe6;
  border-radius: 12px;
  text-align: center;
}

a {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #28a745;
  color: white; /* Manter padrão das cores utilizando o hexadecimal */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}

a:hover {
  background-color: #218838;
}
</style>
