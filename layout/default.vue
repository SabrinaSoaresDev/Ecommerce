<template>
  <!-- Nao usou o layout -->
  <div>
    <header class="header" style="background: #000; color: #fff; padding: 1rem">
      <nav>
        <label>Ecommerce</label>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/cart">Carrinho</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 - Meu E-commerce</p>
    </footer>
  </div>
</template>
<script setup>
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.header {
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
.header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header label {
  font-size: 1.5rem;
  font-weight: bold;
}
.header a {
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
}
.header a:hover {
  text-decoration: underline;
}
.header a:visited {
  color: #fff;
}
.header a:active {
  color: #fff;
}
.header a:focus {
  outline: none;
}
.header a:focus-visible {
  outline: 2px solid #fff;
}
.footer a {
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
}
.footer a:hover {
  text-decoration: underline;
}
.footer a:visited {
  color: #fff;
}
.footer a:active {
  color: #fff;
}
.footer a:focus {
  outline: none;
}
.footer a:focus-visible {
  outline: 2px solid #fff;
}
</style>