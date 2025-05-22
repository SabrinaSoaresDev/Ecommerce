<!-- A estrutura do nuxtjs3 é script template o style -->
<template>
  <header>
    <!-- Poderia ter componentizado o Header -->
    <div class="header">
      <!-- Aqui deveria ter o nav -->
      <label><a href="/">Meu E-commerce</a></label>
      <nav class="nav">
        <!-- Poderia ter feito com ul e li -->
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart" class="nav-link">
          <ShoppingBagIcon class="icon" />
          <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
        </NuxtLink>
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
  <!-- Poderia ter componentizado o Footer -->
  <footer class="footer">
    <p>&copy; 2025 - Meu E-commerce</p>
    <!-- Poderia ter pegado o ano dinamico -->
  </footer>
</template>

<script setup>
// import {
//   ref,
//   computed,
//   onMounted,
// } from "vue"; /* No nuxtjs isso não precisa ficar declarando */
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import CartSidebar from "../Components/CartSidebar.vue";
import { useCartStore } from "../Stores/cart";
import { useProducts } from "../Composables/useProducts";
import ProductCard from "../Components/ProductCard.vue";
import Filter from "../Components/Filter.vue";
import { useToast } from "vue-toastification";
import { useHead } from "#imports";

const showSidebar = ref(false);
const cart = useCartStore();
const { products, fetchProducts } = useProducts();
const selectedCategory = ref("");
const toast = useToast();

const cartCount = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity, 0)
);
useHead({
  title: "Meu E-commerce",
}); /* Poderia colocar isso no arquivo nuxtjs */

function handleAddToCart(product) {
  cart.addToCart(product);
  showSidebar.value = true;
  try {
    toast.success(`${product.title} | Adicionado ao carrinho!`, {
      position: "top-left",
      timeout: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
    });
  } catch (err) {
    toast.error("Erro ao adicionar o produto!", {
      position: "top-left",
      timeout: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
    });
  }
}

const categories = computed(() => [
  ...new Set(products.value.map((p) => p.category)),
]);

const filteredProducts = computed(() => {
  /* Aqui poderia ter buscado no endpoint os produtos por categoria categoria!  https://fakestoreapi.com/products/category/jewelery */
  if (!selectedCategory.value) return products.value;
  return products.value.filter((p) => p.category === selectedCategory.value);
});

onMounted(() => {
  fetchProducts();
  cart.loadCart();
});
</script>


<style scoped>
/* Poderia ter colocado as cores em variaveis */
/* Poderia ter colocado arquivos de  resete no css*/
label a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
}
.page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  min-height: 100vh;
}

.header {
  background-color: #111;

  color: #fff;
  top: 0;
  margin-bottom: 2rem;
  padding: 1.3rem;
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
}
.cart-count {
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: red; /* Manter padrão das cores utilizando o hexadecimal */
  color: white; /* Manter padrão das cores utilizando o hexadecimal */
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: bold;
  pointer-events: none;
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
.icon {
  width: 20px;
  height: 20px;
  color: white; /* Manter padrão das cores utilizando o hexadecimal */
}
.nav-link {
  position: relative;
  display: inline-block;
}
.nav-link:hover .icon {
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
