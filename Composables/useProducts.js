// composables/useProducts.js
import { ref } from 'vue'

export function useProducts() {
  const products = ref([])

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products') // ou sua API real
      products.value = await res.json()
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }
  }

  return {
    products,
    fetchProducts
  }
}
