<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isFloat } from '../typed'

const inputA = 1.23
const inputB = 123
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isFloat(inputA) ? 'true' : 'false'
  outputB.value = isFloat(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isFloat(inputA): {{ outputA }}</div>
      <div>isFloat(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isFloat
      </VPButton>
    </template>
  </VExample>
</template>
