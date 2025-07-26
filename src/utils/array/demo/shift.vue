<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { shift } from '../shift'

const input = [1, 2, 3, 4]
const output = ref<any>(null)
function execute() {
  output.value = shift(input, 2)
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
        Click to Shift
      </VPButton>
    </template>
  </VExample>
</template>
