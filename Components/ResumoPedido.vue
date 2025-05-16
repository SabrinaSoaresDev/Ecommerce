<template>
  <div class="form-section">
    <h2>Resumo do Pedido</h2>

    <p><strong>Endereço:</strong> {{ endereco.rua }},{{ endereco.bairro }},{{ endereco.complemento }}, {{ endereco.cidade }} - {{ endereco.estado }}</p>
    <p><strong>Pagamento:</strong> {{ pagamento.metodo }}</p>

    
    <ul class="lista-itens">
      <li v-for="item in items" :key="item.id">
        {{ item.title }} - {{ item.quantity }}x R$ {{ item.price.toFixed(2) }} = 
        <strong>R$ {{ (item.quantity * item.price).toFixed(2) }}</strong>
      </li>
    </ul>

    <p class="total"><strong>Total:</strong> R$ {{ total.toFixed(2) }}</p>

    <button @click="$emit('confirmar')">Confirmar Compra</button>
  </div>
</template>

<script setup>
defineProps(['endereco', 'pagamento', 'total', 'items'])
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
