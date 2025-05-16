<template>
  <div class="page-container">
    <header class="header">
      <label>Meu E-commerce</label>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart">Carrinho</NuxtLink>
      </nav>
    </header>

    <main class="main-content">
      <h1>Carrinho</h1>

      <div v-if="cart.items.length === 0" class="empty-cart">
        <p>Seu carrinho está vazio.</p>
      </div>

      <div v-else>
        <p>Você tem {{ cart.items.length }} item(s) no carrinho.</p>
        <p>Total: R$ {{ cart.total.toFixed(2) }}</p>

        <div class="actions">
          <button class="btn-clear" @click="cart.clearCart">Limpar Carrinho</button>
          <button class="btn-checkout" @click="cart.checkout">Finalizar Compra</button>
        </div>

        <section class="cart-items-section">
          <h2>Itens no Carrinho</h2>

          <div v-for="item in cart.items" :key="item.id" class="cart-item">
            <img :src="item.image" alt="Imagem do produto" />
            <div class="item-details">
              <h4>{{ item.title }}</h4>
              <p>R$ {{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
            </div>
            <button class="btn-remove" @click="cart.removeItem(item.id)">Remover</button>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer">
      <p>&copy; 2025 - Meu E-commerce</p>
    </footer>
  </div>
</template>

<script setup>
import { useCartStore } from '../Stores/cart'

const cart = useCartStore()

</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header */
.header {
  background-color: #111;
  color: #fff;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 1.5rem;
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

/* Main content */
.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.empty-cart {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
}

.actions {
  display: flex;
  gap: 1rem;
  margin: 1rem 0 2rem;
  justify-content: center;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-clear {
  background-color: #ff4d4d;
  color: white;
}

.btn-clear:hover {
  background-color: #cc0000;
}

.btn-checkout {
  background-color: #007bff;
  color: white;
}

.btn-checkout:hover {
  background-color: #0056b3;
}

/* Cart items */
.cart-items-section {
  margin-top: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #fafafa;
}

.cart-item img {
  max-width: 80px;
  border-radius: 4px;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  margin: 0 0 0.5rem 0;
}

.item-details p {
  margin: 0;
  color: #444;
  font-weight: 500;
}

.btn-remove {
  background-color: #ff4d4d;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 5px;
}

.btn-remove:hover {
  background-color: #cc0000;
}

/* Footer */
.footer {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  margin-top: auto;
}

/* Responsividade */
@media (max-width: 600px) {
  .header {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
  }
  .nav {
    justify-content: center;
    gap: 1rem;
  }
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .cart-item img {
    max-width: 100%;
  }
  .actions {
    flex-direction: column;
  }
  button {
    width: 100%;
  }
}
</style>
