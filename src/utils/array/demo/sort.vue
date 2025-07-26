<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { sort } from '../sort'

const input = [1, 5, 3, 9, 2]
const output = ref<any>(null)
function execute() {
  output.value = sort(input, item => item, 'asc')
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
        Click to Sort
      </VPButton>
    </template>
  </VExample>
</template>
