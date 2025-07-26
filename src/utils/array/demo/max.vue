<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { max } from '../max'

const input = [1, 2, 3]
const output = ref<any>(null)
function execute() {
  output.value = max(input)
}
</script>

<template>
  <VExample>
    <template #left>
      {{ input }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Max
      </VPButton>
    </template>
  </VExample>
</template>
