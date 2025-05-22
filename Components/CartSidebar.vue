<template>
  <transition name="slide">
    <div v-if="visible" class="cart-sidebar">
      <div class="cart-header">
        <h3>Seu Carrinho</h3>
        <button @click="$emit('close')">✖</button>
      </div>
      <div v-if="cart.items.length === 0">
        <p>O carrinho está vazio.</p>
      </div>
      <div v-else>
        <div v-for="item in cart.items" :key="item.id" class="item">
          <!-- Poderia ter  componentizado -->
          <img :src="item.image" alt="Produto" />
          <div class="details">
            <p>{{ item.title }}</p>
            <p>R$ {{ item.price.toFixed(2) }}</p>
            <p>
              Quantidade:
              <input
                type="number"
                min="1"
                v-model.number="item.quantity"
                @change="updateQuantity(item.id, item.quantity)"
              />
            </p>
            <!-- Poderia ter adicionado aria-label -->
            <button class="remove-btn" @click="removeItem(item.id)">
              Remover
            </button>
          </div>
        </div>
        <p class="total">Total: R$ {{ total.toFixed(2) }}</p>
      </div>
      <!-- Poderia ter adicionado aria-label -->
      <button class="finish-btn" @click="goToCart">Finalizar</button>
    </div>
  </transition>
</template>

<script setup>
import { useCartStore } from "../Stores/cart";
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({ visible: Boolean });
const cart = useCartStore();
const router = useRouter();

function goToCart() {
  router.push("/cart");
}
function removeItem(id) {
  cart.removeItem(id);
}

function updateQuantity(id, quantity) {
  if (quantity < 1) {
    quantity = 1; // evita quantidade menor que 1
  }
  cart.updateQuantity(id, quantity);
}

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<style scoped>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.cart-header h3 {
  margin: 0;
}

.cart-header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.item img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.details p {
  margin: 0;
  font-size: 0.9rem;
}
.details p:nth-child(3) {
  color: #555;
  font-size: 0.85rem;
}

.details input[type="number"] {
  width: 50px;
  padding: 0.2rem 0.3rem;
  margin-left: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem;
}
.remove-btn {
  margin-top: 0.3rem;
  background-color: #dc3545;
  color: white; /* Manter padrão das cores utilizando o hexadecimal */
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #b52a38;
}

.total {
  margin-top: 1rem;
  font-weight: bold;
  text-align: right;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

.finish-btn {
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 0.7rem 0;
  background-color: #0d6efd;
  color: white; /* Manter padrão das cores utilizando o hexadecimal */
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.finish-btn:hover {
  background-color: #084ec1;
}
</style>
