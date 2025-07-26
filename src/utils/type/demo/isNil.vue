<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isNil } from '../typed'

const inputA = null
const inputB = undefined
const inputC = 0
const outputA = ref<string>('?')
const outputB = ref<string>('?')
const outputC = ref<string>('?')
function execute() {
  outputA.value = isNil(inputA) ? 'true' : 'false'
  outputB.value = isNil(inputB) ? 'true' : 'false'
  outputC.value = isNil(inputC) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: null</div>
      <div>inputB: undefined</div>
      <div>inputC: 0</div>
    </template>
    <template #right>
      <div>isNil(inputA): {{ outputA }}</div>
      <div>isNil(inputB): {{ outputB }}</div>
      <div>isNil(inputC): {{ outputC }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isNil
      </VPButton>
    </template>
  </VExample>
</template>
