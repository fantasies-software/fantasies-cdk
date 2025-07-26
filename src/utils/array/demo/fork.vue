<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { fork } from '../fork'

const input = [1, 2, 3, 4]
const output = ref<any>(null)
function execute() {
  output.value = fork(input, n => n % 2 === 0)
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
        Click to Fork
      </VPButton>
    </template>
  </VExample>
</template>
