<template>
  <header>  
    <div class="header">
      <label>Meu E-commerce</label>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart">Carrinho</NuxtLink>
      </nav>
    </div>
  </header>

    <main class="content">
      <Filter :categories="categories" v-model="selectedCategory" />

      <h1 class="title">Produtos</h1>
      <hr class="divider" />

      <div class="grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
      <CartSidebar :visible="showSidebar" @close="showSidebar = false" />
    </main>
    <footer class="footer">
      <p>&copy; 2025 - Meu E-commerce</p>
    </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CartSidebar from '../Components/CartSidebar.vue'
import { useCartStore } from '../Stores/cart'
import { useProducts } from '../Composables/useProducts'
import ProductCard from '../Components/ProductCard.vue'
import Filter from '../Components/Filter.vue'

const showSidebar = ref(false)
const cart = useCartStore()
const { products, fetchProducts } = useProducts()
const selectedCategory = ref('')

function handleAddToCart(product) {
  cart.addToCart(product)
  showSidebar.value = true  
}

const categories = computed(() => [
  ...new Set(products.value.map(p => p.category))
])

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value
  return products.value.filter(p => p.category === selectedCategory.value)
})

onMounted(() => {
  fetchProducts()
  cart.loadCart()
})
</script>


<style scoped>
.page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  min-height: 100vh;
}

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

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.title {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  color: #222;
}

.divider {
  margin: 1rem auto 2rem;
  border: none;
  height: 2px;
  background-color: #ddd;
  width: 80%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
.footer {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 1rem;
      }
</style>
