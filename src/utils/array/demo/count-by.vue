<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { countBy } from '../count-by'

const input = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' },
]
const output = ref<any>(null)
function execute() {
  output.value = countBy(input, item => item.name)
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
        Click to CountBy
      </VPButton>
    </template>
  </VExample>
</template>
