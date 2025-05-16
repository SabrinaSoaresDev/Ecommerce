// stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    loadCart() {
      if (process.client) {
        const saved = localStorage.getItem('cart')
        this.items = saved ? JSON.parse(saved) : []
      }
    },
    addToCart(product) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
      this.saveCart()
    },
    updateQuantity(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (item) item.quantity = qty
      this.saveCart()
    },
    saveCart() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    }
    
  }
})
