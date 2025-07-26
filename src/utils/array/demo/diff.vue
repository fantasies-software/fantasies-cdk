<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { diff } from '../diff'

const inputA = [1, 2, 3]
const inputB = [2, 3]
const output = ref<any>(null)
function execute() {
  output.value = diff(inputA, inputB)
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
        Click to Diff
      </VPButton>
    </template>
  </VExample>
</template>
