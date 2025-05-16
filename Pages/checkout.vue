<!-- pages/checkout.vue -->
<template>
     <header class="header">
      <label>Meu E-commerce</label>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/cart">Carrinho</NuxtLink>
      </nav>
    </header>
  <div class="checkout-container">
    <h1>Finalizar Compra</h1>

    <EnderecoForm v-model="endereco" />

    <PagamentoForm v-model="pagamento" />

    <ResumoPedido :endereco="endereco" :pagamento="pagamento" :total="total" @confirmar="confirmarCompra" />

    <ul>
        <h3>Itens no Carrinho:</h3>
        <li v-if="cart.items.length === 0">Seu carrinho está vazio.</li>
        <li v-for="item in cart.items" :key="item.id">
            {{ item.title }} | Qtd:{{ item.quantity }} | R$ {{ item.price.toFixed(2) }}
        </li>
        </ul>
  </div>
    <footer class="footer">
            <p>&copy; 2025 - Meu E-commerce</p>
        </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import EnderecoForm from '../Components/EnderecoForm.vue'
import PagamentoForm from '../Components/PagamentoForm.vue'
import ResumoPedido from '../Components/ResumoPedido.vue'
import { useCartStore } from '../Stores/cart'

const cart = useCartStore()

const endereco = ref({
  nome: '',
  rua: '',
  cidade: '',
  cep: '',
  estado: ''
})

const pagamento = ref({
  metodo: '',
  numeroCartao: '',
  validade: '',
  cvv: ''
})

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function confirmarCompra() {
  alert('Compra finalizada com sucesso!')
  cart.clearCart()
}
</script>

<style scoped>
/* Estilos para o checkout */
body {
  background-color: #ddd;
  font-family: Arial, sans-serif;
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
.checkout-container {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
}

.checkout-container h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  padding-top: 1.5rem;
}

li {
  font-size: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  color: #444;
}

/* Botão de confirmar (no ResumoPedido.vue) */
button {
  background-color: #28a745;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #218838;
}

/* Responsividade */
@media (max-width: 768px) {
  .checkout-container {
    padding: 1rem;
    margin: 1rem;
  }

  .checkout-container h1 {
    font-size: 1.5rem;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
  }

  ul {
    padding-top: 1rem;
  }

  li {
    font-size: 0.95rem;
  }
}
.footer {
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 1rem;
      }
</style>

