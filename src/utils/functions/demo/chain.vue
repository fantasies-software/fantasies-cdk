<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { chain } from '../chain'

const f1 = (x: number) => x + 1
const f2 = (x: number) => x * 2
const f3 = (x: number) => x - 3
const chained = chain(f1, f2, f3)

const input = ref(5)
const output = ref<number | null>(null)

function execute() {
  output.value = chained(input.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Input: {{ input }}</div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Execute Chain
      </VPButton>
    </template>
  </VExample>
</template>
