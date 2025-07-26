<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { unique } from '../unique'

const input = [1, 2, 1, 3, 2]
const output = ref<any>(null)
function execute() {
  output.value = unique(input)
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
        Click to Unique
      </VPButton>
    </template>
  </VExample>
</template>
