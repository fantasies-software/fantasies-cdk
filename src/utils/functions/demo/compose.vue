<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { compose } from '../compose'

const log: string[] = []
const output = ref<number | null>(null)

function f1(next: (x: number) => number) {
  return function (x: number) {
    log.push(`f1(${x})`)
    return next(x + 1)
  }
}
function f2(next: (x: number) => number) {
  return function (x: number) {
    log.push(`f2(${x})`)
    return next(x * 2)
  }
}
function last(x: number) {
  log.push(`last(${x})`)
  return x - 3
}

const composed = compose(f1, f2, last)
const input = ref(5)

function execute() {
  log.length = 0
  output.value = composed(input.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Input: {{ input }}</div>
      <div>Call chain: f1 → f2 → last</div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
      <div v-if="log.length">
        Log: <pre>{{ log.join('\n') }}</pre>
      </div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Execute Compose
      </VPButton>
    </template>
  </VExample>
</template>
