<template>
  <div class="form-section">
  </hr>
    <h2>Pagamento</h2>
    <select v-model="modelValue.metodo">
      <option value="">Escolha uma forma de pagamento</option>
      <option value="credito">Cartão de Crédito</option>
      <option value="debito">Cartão de Débito</option>
      <option value="pix">PIX</option>
    </select>
    <input v-if="modelValue.metodo === 'credito' || modelValue.metodo === 'debito'" v-model="modelValue.numeroCartao" placeholder="Número do Cartão" />
    <input v-if="modelValue.metodo === 'credito' || modelValue.metodo === 'debito'" v-model="modelValue.validade" placeholder="Validade (MM/AA)" />
    <input v-if="modelValue.metodo === 'credito' || modelValue.metodo === 'debito'" v-model="modelValue.cvv" placeholder="CVV" />
  </div>
</template>

<script setup>
defineProps(['modelValue'])
</script>
<style scoped>
.form-section {
  margin-bottom: 2rem;
}

input,
select {
  display: block;
  width: 50%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
  cursor: pointer;
}

select:focus,
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

    </style>
