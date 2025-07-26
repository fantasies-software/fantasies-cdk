<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isObject } from '../typed'

const inputA = { a: 1 }
const inputB = [1, 2, 3]
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isObject(inputA) ? 'true' : 'false'
  outputB.value = isObject(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: {{ inputA }}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isObject(inputA): {{ outputA }}</div>
      <div>isObject(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isObject
      </VPButton>
    </template>
  </VExample>
</template>
