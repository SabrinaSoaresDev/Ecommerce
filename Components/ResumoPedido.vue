<template>
  <div class="form-section">
    <h2>Resumo do Pedido</h2>

    <div class="resumo-content">
      <div class="resumo-item">
        <h3>Endereço de Entrega:</h3>
        <template v-if="endereco.rua">
          <p>{{ endereco.nome }}</p>
          <p>{{ endereco.rua }}, {{ endereco.numero }} {{ endereco.complemento ? '- ' + endereco.complemento : '' }}</p>
          <p>{{ endereco.bairro }}, {{ endereco.cidade }} - {{ endereco.estado }}</p>
          <p>CEP: {{ endereco.cep }}</p>
        </template>
        <p v-else class="empty-info">Nenhum endereço informado</p>
      </div>

      <div class="resumo-item">
        <h3>Método de Pagamento:</h3>
        <template v-if="pagamento.metodo">
          <p>{{ pagamento.metodo }}</p>
          <template v-if="pagamento.metodo === 'cartao'">
            <p>Cartão: **** **** **** {{ pagamento.numeroCartao.slice(-4) }}</p>
            <p>Validade: {{ pagamento.validade }}</p>
            <p>Titular: {{ pagamento.nomeCartao }}</p>
          </template>
        </template>
        <p v-else class="empty-info">Nenhum método selecionado</p>
      </div>

      <div class="resumo-item total-section">
        <h3>Total do Pedido:</h3>
        <p class="total-value">R$ {{ total.toFixed(2) }}</p>
      </div>
    </div>

    <button 
      @click="confirmar"
      :disabled="loading"
      :class="{ 'loading-button': loading }"
    >
      <span v-if="!loading">Confirmar Compra</span>
      <span v-else>Processando...</span>
    </button>

    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['confirmar'])

const props = defineProps({
  endereco: {
    type: Object,
    required: true
  },
  pagamento: {
    type: Object,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

function confirmar() {
  emit('confirmar')
}
</script>



<style scoped>
.form-section {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  max-width: 600px;
  margin: auto;
}

.lista-itens {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.lista-itens li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
}

button {
  background-color: #28a745;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #218838;
}
</style>
