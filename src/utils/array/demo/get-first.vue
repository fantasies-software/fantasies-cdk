<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { getFirst } from '../get-first'

const input = [1, 2, 3]
const output = ref<any>(null)
function execute() {
  output.value = getFirst(input)
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
        Click to GetFirst
      </VPButton>
    </template>
  </VExample>
</template>
