<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { partial } from '../partial'

const add = (a: number, b: number, c: number) => a + b + c
const partialAdd = partial(add, 1, 2)
const input = ref(3)
const output = ref<number | null>(null)

function execute() {
  output.value = partialAdd(input.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>add(1, 2, x)</div>
      <div>x: <input v-model.number="input" type="number"></div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Partial Calculate
      </VPButton>
    </template>
  </VExample>
</template>
