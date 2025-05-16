<template>
  <div class="filter">
    <label for="category">Filtrar por categoria:</label>
    <select id="category" v-model="selected" class="select">
      <option value="">Todas</option>
      <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  categories: Array,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)

watch(selected, (value) => {
  emit('update:modelValue', value)
})
</script>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

label {
  font-weight: 600;
  color: #333;
}

.select {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fdfdfd;
  transition: border-color 0.3s ease;
}

.select:focus {
  outline: none;
  border-color: #007bff;
}
</style>
