<!-- components/CartItem.vue -->
<template>
  <div class="cart-item">
    <img :src="item.image" />
    <div>
      <h4>{{ item.title }}</h4>
      <p>{{ item.price | currency }}</p>
      <input type="number" v-model.number="item.quantity" @change="updateQuantity" />
      <button @click="removeItem">Remover</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../Stores/cart'
const props = defineProps({ item: Object })
const cart = useCartStore()

const updateQuantity = () => {
  cart.updateQuantity(props.item.id, props.item.quantity)
}

const removeItem = () => {
  cart.removeItem(props.item.id)
}
</script>
