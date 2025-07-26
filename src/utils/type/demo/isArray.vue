<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isArray } from '../typed'

const inputA = [1, 2, 3]
const inputB = 'abc'
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isArray(inputA) ? 'true' : 'false'
  outputB.value = isArray(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isArray(inputA): {{ outputA }}</div>
      <div>isArray(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isArray
      </VPButton>
    </template>
  </VExample>
</template>
