<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { min } from '../min'

const input = [1, 2, 3]
const output = ref<any>(null)
function execute() {
  output.value = min(input)
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
        Click to Min
      </VPButton>
    </template>
  </VExample>
</template>
