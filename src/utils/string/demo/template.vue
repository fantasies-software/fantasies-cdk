<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { template } from '../template'

const inputStr = 'Hello, {{ name }}!'
const inputData = { name: 'World' }
const output = ref<string>('?')
function execute() {
  output.value = template(inputStr, inputData)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>str: {{ inputStr }}</div>
      <div>data: {{ inputData }}</div>
    </template>
    <template #right>
      <div>{{ output }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Execute template
      </VPButton>
    </template>
  </VExample>
</template>
