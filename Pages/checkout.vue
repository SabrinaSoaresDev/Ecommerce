<template>
  <header class="header">
    <label><a href="/">Meu E-commerce</a></label>
    <nav class="nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/cart" class="nav-link">
        <ShoppingBagIcon class="icon" />
        <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
      </NuxtLink>
    </nav>
  </header>

  <div class="checkout-container">
    <h1>Finalizar Compra</h1>

    <EnderecoForm v-model="endereco" />
    <PagamentoForm v-model="pagamento" />
    
    <!-- Passando items para o ResumoPedido -->
  <ResumoPedido 
  :endereco="endereco" 
  :pagamento="pagamento" 
  :total="total" 
  @confirmar="confirmarCompra" 
/>

    <ul>
      <h3>Itens no Carrinho:</h3>
      <li v-if="cart.items.length === 0">Seu carrinho está vazio.</li>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.title }} | Qtd: {{ item.quantity }} | R$ {{ item.price.toFixed(2) }}
      </li>
    </ul>
  </div>

  <footer class="footer">
    <p>&copy; 2025 - Meu E-commerce</p>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
import EnderecoForm from '../Components/EnderecoForm.vue'
import PagamentoForm from '../Components/PagamentoForm.vue'
import ResumoPedido from '../Components/ResumoPedido.vue'
import { useCartStore } from '../Stores/cart'

import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()
const loading = ref(false)
const { $toast } = useNuxtApp()
const cartCount = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity, 0)
)

const endereco = ref({
  nome: '',
  rua: '',
  cidade: '',
  cep: '',
  estado: '',
  bairro: '',
  complemento: ''
})

const pagamento = ref({
  metodo: '',
  nomeCartao: '',
  numeroCartao: '',
  validade: '',
  cvv: ''
})

const enderecoErrors = ref({})
const pagamentoErrors = ref({})

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// Funções de validação
function validarCEP(cep) {
  const cepRegex = /^\d{5}-?\d{3}$/
  return cepRegex.test(cep)
}

function validarNumeroCartao(numero) {
  // Validação básica de cartão (16 dígitos)
  const cleaned = numero.replace(/\s+/g, '')
  return /^\d{13,16}$/.test(cleaned)
}

function validarCVV(cvv) {
  return /^\d{3,4}$/.test(cvv)
}

function validarValidade(validade) {
  if (!/^\d{2}\/\d{2}$/.test(validade)) return false
  
  const [mes, ano] = validade.split('/')
  const now = new Date()
  const currentYear = now.getFullYear() % 100
  const currentMonth = now.getMonth() + 1
  
  // Cartão é válido até o último dia do mês
  return (
    (ano > currentYear) || 
    (ano == currentYear && mes >= currentMonth)
  )
}

function validarCampos() {
  let valido = true
  enderecoErrors.value = {}
  pagamentoErrors.value = {}

  // Validação de endereço
  if (!endereco.value.nome) {
    enderecoErrors.value.nome = 'Nome é obrigatório'
    valido = false
  }

  if (!endereco.value.rua) {
    enderecoErrors.value.rua = 'Rua é obrigatória'
    valido = false
  }

  if (!endereco.value.cidade) {
    enderecoErrors.value.cidade = 'Cidade é obrigatória'
    valido = false
  }

  if (!endereco.value.cep) {
    enderecoErrors.value.cep = 'CEP é obrigatório'
    valido = false
  } else if (!validarCEP(endereco.value.cep)) {
    enderecoErrors.value.cep = 'CEP inválido (formato: 00000-000 ou 00000000)'
    valido = false
  }

  if (!endereco.value.estado) {
    enderecoErrors.value.estado = 'Estado é obrigatório'
    valido = false
  }

  // Validação de pagamento
  if (!pagamento.value.metodo) {
    pagamentoErrors.value.metodo = 'Método de pagamento é obrigatório'
    valido = false
  }

  if (pagamento.value.metodo === 'cartao') {
    if (!pagamento.value.nomeCartao) {
      pagamentoErrors.value.nomeCartao = 'Nome no cartão é obrigatório'
      valido = false
    }

    if (!pagamento.value.numeroCartao) {
      pagamentoErrors.value.numeroCartao = 'Número do cartão é obrigatório'
      valido = false
    } else if (!validarNumeroCartao(pagamento.value.numeroCartao)) {
      pagamentoErrors.value.numeroCartao = 'Número do cartão inválido'
      valido = false
    }

    if (!pagamento.value.validade) {
      pagamentoErrors.value.validade = 'Validade é obrigatória'
      valido = false
    } else if (!validarValidade(pagamento.value.validade)) {
      pagamentoErrors.value.validade = 'Validade inválida (formato: MM/AA) ou cartão expirado'
      valido = false
    }

    if (!pagamento.value.cvv) {
      pagamentoErrors.value.cvv = 'CVV é obrigatório'
      valido = false
    } else if (!validarCVV(pagamento.value.cvv)) {
      pagamentoErrors.value.cvv = 'CVV inválido (3 ou 4 dígitos)'
      valido = false
    }
  }

  return valido
}

async function confirmarCompra() {
  // Verifica se há itens no carrinho
  if (cart.items.length === 0) {
    $toast.error('Seu carrinho está vazio. Adicione itens antes de finalizar a compra.')
    return
  }

  // Valida todos os campos
  if (!validarCampos()) {
    $toast.error('Por favor, corrija os erros no formulário.')
    return
  }

  loading.value = true

  try {
    // Simula um processamento assíncrono
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    $toast.success('Compra finalizada com sucesso!')
    cart.clearCart()
    router.push('/success')
  } catch (error) {
    $toast.error('Ocorreu um erro ao processar sua compra. Tente novamente.')
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
/* Estilos para o checkout */
body {
  background-color: #ddd;
  font-family: Arial, sans-serif;
}
label a{
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
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
.cart-count {
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: red;
  color: white;
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
.nav-link {
  position: relative; 
  display: inline-block; 
}
.nav a:hover {
  color: #00bfff;
}
.icon {
  width: 20px;
  height: 20px;
  color: white;
}
.nav-link:hover .icon {
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

