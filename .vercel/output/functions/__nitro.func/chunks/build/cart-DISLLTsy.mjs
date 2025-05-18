import { defineStore } from 'pinia';

const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  actions: {
    loadCart() {
    },
    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    clearCart() {
      this.items = [];
      this.saveCart();
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
      this.saveCart();
    },
    updateQuantity(id, qty) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.quantity = qty;
      this.saveCart();
    },
    saveCart() {
    }
  }
});

export { useCartStore as u };
//# sourceMappingURL=cart-DISLLTsy.mjs.map
