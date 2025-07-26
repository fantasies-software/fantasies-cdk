<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { iterate } from '../iterate'

const count = 5
const output = ref<any>(null)
function execute() {
  output.value = iterate(count, (acc, i) => acc + i, 0)
}
</script>

<template>
  <VExample>
    <template #left>
      count: {{ count }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Iterate
      </VPButton>
    </template>
  </VExample>
</template>
