<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { merge } from '../merge'

const inputA = [1, 2, 3]
const inputB = [2, 3, 4]
const output = ref<any>(null)
function execute() {
  output.value = merge(inputA, inputB, n => n)
}
</script>

<template>
  <VExample>
    <template #left>
      {{ inputA }} - {{ inputB }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Merge
      </VPButton>
    </template>
  </VExample>
</template>
