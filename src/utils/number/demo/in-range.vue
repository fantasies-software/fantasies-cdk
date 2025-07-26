<script setup lang="ts">
import { computed, ref } from 'vue'
import { inRange } from '../in-range'

const number = ref<number | null>(null)
const start = ref<number | null>(null)
const end = ref<number | null>(null)
const touched = ref(false)

const valid = computed(() =>
  number.value !== null && start.value !== null && end.value !== null
  && !Number.isNaN(number.value) && !Number.isNaN(start.value) && !Number.isNaN(end.value),
)

const result = computed(() => {
  if (!valid.value)
    return 'Please enter all numbers'
  return inRange(number.value as number, start.value as number, end.value as number)
    ? 'In range'
    : 'Out of range'
})
</script>

<template>
  <VExample>
    <template #left>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <label>
          number:
          <input v-model.number="number" type="number" style="width: 80px;" placeholder="number" @input="touched = true">
        </label>
        <label>
          start:
          <input v-model.number="start" type="number" style="width: 80px;" placeholder="start" @input="touched = true">
        </label>
        <label>
          end:
          <input v-model.number="end" type="number" style="width: 80px;" placeholder="end" @input="touched = true">
        </label>
      </div>
    </template>
    <template #right>
      <span v-if="touched">{{ result }}</span>
      <span v-else>Please fill all inputs above</span>
    </template>
  </VExample>
</template>
