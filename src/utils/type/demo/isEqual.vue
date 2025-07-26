<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isEqual } from '../typed'

const inputA1 = 1
const inputA2 = 1
const inputB1 = [1, 2]
const inputB2 = [1, 2]
const inputC1 = { a: 1 }
const inputC2 = { a: 1 }
const inputD1 = { a: 1 }
const inputD2 = { a: 2 }
const outputA = ref<string>('?')
const outputB = ref<string>('?')
const outputC = ref<string>('?')
const outputD = ref<string>('?')
function execute() {
  outputA.value = isEqual(inputA1, inputA2) ? 'true' : 'false'
  outputB.value = isEqual(inputB1, inputB2) ? 'true' : 'false'
  outputC.value = isEqual(inputC1, inputC2) ? 'true' : 'false'
  outputD.value = isEqual(inputD1, inputD2) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA1 }}, {{ inputA2 }}</div>
      <div>inputB: {{ inputB1 }}, {{ inputB2 }}</div>
      <div>inputC: {{ inputC1 }}, {{ inputC2 }}</div>
      <div>inputD: {{ inputD1 }}, {{ inputD2 }}</div>
    </template>
    <template #right>
      <div>isEqual(inputA): {{ outputA }}</div>
      <div>isEqual(inputB): {{ outputB }}</div>
      <div>isEqual(inputC): {{ outputC }}</div>
      <div>isEqual(inputD): {{ outputD }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isEqual
      </VPButton>
    </template>
  </VExample>
</template>
