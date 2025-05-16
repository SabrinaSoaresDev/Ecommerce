<template>
  <div class="card">
    <img :src="product.image" alt="Imagem do produto" class="product-image" />
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-price">R$ {{ product.price.toFixed(2) }}</p>
    <button class="add-to-cart" @click="$emit('add-to-cart', product)">
      Adicionar ao carrinho
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.product-image {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #333;
  min-height: 48px;
}

.product-price {
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 1rem;
}

.add-to-cart {
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.add-to-cart:hover {
  background-color: #084ec1;
}

/* Responsivo para telas pequenas */
@media (max-width: 600px) {
  .card {
    padding: 1rem;
  }

  .product-title {
    font-size: 0.95rem;
  }

  .product-price {
    font-size: 1rem;
  }
}
</style>
