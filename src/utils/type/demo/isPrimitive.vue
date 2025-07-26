<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isPrimitive } from '../typed'

const inputA = 123
const inputB = 'abc'
const inputC = {}
const outputA = ref<string>('?')
const outputB = ref<string>('?')
const outputC = ref<string>('?')
function execute() {
  outputA.value = isPrimitive(inputA) ? 'true' : 'false'
  outputB.value = isPrimitive(inputB) ? 'true' : 'false'
  outputC.value = isPrimitive(inputC) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
      <div>inputC: {}</div>
    </template>
    <template #right>
      <div>isPrimitive(inputA): {{ outputA }}</div>
      <div>isPrimitive(inputB): {{ outputB }}</div>
      <div>isPrimitive(inputC): {{ outputC }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isPrimitive
      </VPButton>
    </template>
  </VExample>
</template>
