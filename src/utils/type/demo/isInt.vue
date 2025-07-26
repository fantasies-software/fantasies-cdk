<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isInt } from '../typed'

const inputA = 123
const inputB = 1.23
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isInt(inputA) ? 'true' : 'false'
  outputB.value = isInt(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isInt(inputA): {{ outputA }}</div>
      <div>isInt(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isInt
      </VPButton>
    </template>
  </VExample>
</template>
