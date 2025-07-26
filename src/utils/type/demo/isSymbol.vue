<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isSymbol } from '../typed'

const inputA = Symbol('a')
const inputB = 'a'
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isSymbol(inputA) ? 'true' : 'false'
  outputB.value = isSymbol(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: Symbol('a')</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isSymbol(inputA): {{ outputA }}</div>
      <div>isSymbol(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isSymbol
      </VPButton>
    </template>
  </VExample>
</template>
