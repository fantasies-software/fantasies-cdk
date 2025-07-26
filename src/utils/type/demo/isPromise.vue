<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isPromise } from '../typed'

const inputA = Promise.resolve()
const inputB = {}
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isPromise(inputA) ? 'true' : 'false'
  outputB.value = isPromise(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: Promise.resolve()</div>
      <div>inputB: {}</div>
    </template>
    <template #right>
      <div>isPromise(inputA): {{ outputA }}</div>
      <div>isPromise(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isPromise
      </VPButton>
    </template>
  </VExample>
</template>
