<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { toDic } from '../to-dic'

const input = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
const output = ref<any>(null)
function execute() {
  output.value = toDic(input, item => item.id, item => item.name)
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
        Click to ToDic
      </VPButton>
    </template>
  </VExample>
</template>
