<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { range } from '../range'

const output = ref<any>(null)
function execute() {
  output.value = Array.from(range(1, 5))
}
</script>

<template>
  <VExample>
    <template #left>
      range(1, 5)
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Range
      </VPButton>
    </template>
  </VExample>
</template>
