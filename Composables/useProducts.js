// composables/useProducts.js
import { ref } from 'vue'
import axios from 'axios'

export const useProducts = () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      products.value = res.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  return { products, fetchProducts, loading, error }
}
