<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { selectMap } from '../select-map'

const input = [1, 2, 3, 4]
const output = ref<any>(null)
function execute() {
  output.value = selectMap(input, n => n % 2 === 0, n => n * 10)
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
        Click to SelectMap
      </VPButton>
    </template>
  </VExample>
</template>
