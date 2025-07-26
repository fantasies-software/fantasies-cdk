<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { memoize } from '../memoize'

const cache = {}
const callCount = ref(0)
const memoized = memoize(cache, (x: number) => {
  callCount.value++
  return x * 3
}, null, null)
const input = ref(0)
const output = ref<number | null>(null)

function execute() {
  output.value = memoized(input.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Input: <input v-model.number="input" type="number"></div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
      <div>Actual calculation count: {{ callCount }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Memoize Calculate
      </VPButton>
    </template>
  </VExample>
</template>
