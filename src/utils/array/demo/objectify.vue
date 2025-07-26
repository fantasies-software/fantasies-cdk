<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { objectify } from '../objectify'

const input = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
const output = ref<any>(null)
function execute() {
  output.value = objectify(input, item => item.id, item => item.name)
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
        Click to Objectify
      </VPButton>
    </template>
  </VExample>
</template>
