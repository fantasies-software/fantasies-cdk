<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isString } from '../typed'

const inputA = 'abc'
const inputB = 123
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isString(inputA) ? 'true' : 'false'
  outputB.value = isString(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isString(inputA): {{ outputA }}</div>
      <div>isString(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isString
      </VPButton>
    </template>
  </VExample>
</template>
