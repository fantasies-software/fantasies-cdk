<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isRegexp } from '../typed'

const inputA = /abc/
const inputB = 'abc'
const outputA = ref<string>('?')
const outputB = ref<string>('?')
function execute() {
  outputA.value = isRegexp(inputA) ? 'true' : 'false'
  outputB.value = isRegexp(inputB) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: /abc/</div>
      <div>inputB: {{ inputB }}</div>
    </template>
    <template #right>
      <div>isRegexp(inputA): {{ outputA }}</div>
      <div>isRegexp(inputB): {{ outputB }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        检查 isRegexp
      </VPButton>
    </template>
  </VExample>
</template>
