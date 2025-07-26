<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { random } from '../random'

const min = ref(1)
const max = ref(10)
const result = ref<number | null>(null)

function execute() {
  result.value = random(min.value, max.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>min: <input v-model.number="min" type="number"></div>
      <div>max: <input v-model.number="max" type="number"></div>
    </template>
    <template #right>
      <div>Random number: {{ result }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Generate Random Number
      </VPButton>
    </template>
  </VExample>
</template>
