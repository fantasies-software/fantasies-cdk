<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { flat } from '../flat'

const input = [[1, 2], [3, 4], [5, 6]]
const output = ref<any>(null)
function execute() {
  output.value = flat(input)
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
        Click to Flat
      </VPButton>
    </template>
  </VExample>
</template>
