<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { groupBy } from '../group-by'

const input = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Alice' },
]
const output = ref<any>(null)
function execute() {
  output.value = groupBy(input, item => item.name)
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
        Click to GroupBy
      </VPButton>
    </template>
  </VExample>
</template>
