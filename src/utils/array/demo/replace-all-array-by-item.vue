<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { replaceAllArrayByItem } from '../replace-all-array-by-item'

const input = [1, 2, 3, 2, 4]
const output = ref<any>(null)
function execute() {
  output.value = replaceAllArrayByItem(input, 0, item => item === 2)
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
        Click to ReplaceAllArrayByItem
      </VPButton>
    </template>
  </VExample>
</template>
