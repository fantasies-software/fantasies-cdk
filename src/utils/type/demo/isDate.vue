<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isDate } from '../typed'

const inputA = new Date()
const inputB = '2020-01-01'
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isDate(inputA) ? 'true' : 'false'
  outputB.value = isDate(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA.toString() }}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isDate(inputA): {{ outputA }}</div>
      <div>isDate(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isDate
      </VPButton>
    </template>
  </VExample>
</template>
