<template>
  <div class="form-section">
    <h2>Endereço de Entrega</h2>
    <input v-model="modelValue.nome" placeholder="Nome completo" />
    <input v-model="modelValue.rua" placeholder="Rua" />
    <input v-model="modelValue.bairro" placeholder="bairro" />
    <input v-model="modelValue.complemento" placeholder="complemento" />
    <input v-model="modelValue.cidade" placeholder="Cidade" />
    <input v-model="modelValue.estado" placeholder="Estado" />
    <input v-model="modelValue.cep" placeholder="CEP" />
  </div>
</template>

<script setup>
defineProps(['modelValue'])
</script>

<style scoped>
.form-section {
  margin-bottom: 2rem;
  justify-content: center;
    align-items: center;
    display: inline;
}
input {
  display: block;
  width: 50%;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
