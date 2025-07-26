<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { memo } from '../memo'

const count = ref(0)
const callCount = ref(0)
const memoized = memo((x: number) => {
  callCount.value++
  return x * 2
})
const output = ref<number | null>(null)

function execute() {
  output.value = memoized(count.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Input: <input v-model.number="count" type="number"></div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
      <div>Actual calculation count: {{ callCount }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Memo Calculate
      </VPButton>
    </template>
  </VExample>
</template>
