<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isFunction } from '../typed'

function inputA() {}
const inputB = 123
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isFunction(inputA) ? 'true' : 'false'
  outputB.value = isFunction(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: () => {'{}'}</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isFunction(inputA): {{ outputA }}</div>
      <div>isFunction(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isFunction
      </VPButton>
    </template>
  </VExample>
</template>
