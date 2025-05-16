<!-- pages/cart.vue -->
<template>
  
    <header class="header">
      <label>Meu E-commerce</label>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart">Carrinho</NuxtLink>
      </nav>
    </header>


  <div class="cart-page">
    <h1>Seu Carrinho</h1>
    <div v-if="cart.items.length === 0" class="empty">
      <p>Seu carrinho está vazio.</p>
      <NuxtLink to="/">Voltar à loja</NuxtLink>
    </div>

    <div v-else>
      <div class="cart-item" v-for="item in cart.items" :key="item.id">
        <img :src="item.image" alt="imagem" />
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>Preço: R$ {{ item.price.toFixed(2) }}</p>
          Quantidade: <input type="number" v-model.number="item.quantity" @change="update(item)" min="1" />
          <button @click="remove(item.id)">Remover</button>
        </div>
      </div>

      <div class="total">
        Total: R$ {{ total.toFixed(2) }}
      </div>
    <NuxtLink to="/checkout" @click="goToCart" class="checkout-btn">Finalizar Compra</NuxtLink>
    </div>
    
  </div>
  <footer class="footer">
        <p>&copy; 2025 - Meu E-commerce</p>
    </footer>
    
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCartStore } from '../Stores/cart'
const router = useRouter()

function goToCart() {
  router.push('/checkout')
}
const cart = useCartStore()

onMounted(() => {
  cart.loadCart()
})

function update(item) {
  cart.updateQuantity(item.id, item.quantity)
}

function remove(id) {
  cart.removeItem(id)
}

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>

<style scoped>

.header {
  background-color: #111;
  
  color: #fff;
  top: 0;
  margin-bottom: 2rem;
  padding: 1.3rem ;
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
}
.header label {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  justify-content: space-between;
}
.nav {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #00bfff;
}
.cart-page {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem 1rem;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border-radius: 12px;
}

.cart-page h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.empty {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
}

.empty a {
  display: inline-block;
  margin-top: 1rem;
  background-color: #0d6efd;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.empty a:hover {
  background-color: #084ec1;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  transition: box-shadow 0.3s;
}

.cart-item:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.info {
  flex: 1;
}

.info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.info p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.8rem;
}

input[type="number"] {
  width: 60px;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  margin-left: 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b52a38;
}

.total {
  text-align: right;
  font-size: 1.4rem;
  font-weight: 600;
  color: #222;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  padding-top: 1.5rem;
}
.checkout-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #218838;
}

/* Responsivo */
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item img {
    width: 80px;
    height: 80px;
  }

  .info {
    width: 100%;
  }

  .total {
    text-align: center;
  }
}
.footer {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 1rem;
      }
</style>
