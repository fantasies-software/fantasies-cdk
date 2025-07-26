<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { isEmpty } from '../typed'

const inputA: any[] = []
const inputB = {}
const inputC = ''
const inputD = [1, 2, 3]
const outputA = ref<string>('?')
const outputB = ref<string>('?')
const outputC = ref<string>('?')
const outputD = ref<string>('?')
function execute() {
  outputA.value = isEmpty(inputA) ? 'true' : 'false'
  outputB.value = isEmpty(inputB) ? 'true' : 'false'
  outputC.value = isEmpty(inputC) ? 'true' : 'false'
  outputD.value = isEmpty(inputD) ? 'true' : 'false'
}
</script>

<template>
  <VExample>
    <template #left>
      <div>inputA: []</div>
      <div>inputB: {}</div>
      <div>inputC: ''</div>
      <div>inputD: [1, 2, 3]</div>
    </template>
    <template #right>
      <div>isEmpty(inputA): {{ outputA }}</div>
      <div>isEmpty(inputB): {{ outputB }}</div>
      <div>isEmpty(inputC): {{ outputC }}</div>
      <div>isEmpty(inputD): {{ outputD }}</div>
    </template>
    <template #button>
      <VPButton @click="execute">
        Check isEmpty
      </VPButton>
    </template>
  </VExample>
</template>
