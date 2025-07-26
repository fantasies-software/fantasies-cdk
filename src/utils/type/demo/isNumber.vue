<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isNumber } from '../typed'

const inputA = 123
const inputB = 'abc'
const inputC = Number.NaN
const outputA = ref<string>('?')
const outputB = ref<string>('?')
const outputC = ref<string>('?')
function execute() {
  outputA.value = isNumber(inputA) ? 'true' : 'false'
  outputB.value = isNumber(inputB) ? 'true' : 'false'
  outputC.value = isNumber(inputC) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
      <div>inputC: NaN</div>
    </template>
    <template #right>
      <div>isNumber(inputA): {{ outputA }}</div>
      <div>isNumber(inputB): {{ outputB }}</div>
      <div>isNumber(inputC): {{ outputC }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isNumber
      </VPButton>
    </template>
  </VExample>
</template>
