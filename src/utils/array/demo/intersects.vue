<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { intersects } from '../intersects'

const inputA = [1, 2, 3]
const inputB = [3, 4, 5]
const output = ref<any>(null)
function execute() {
  output.value = intersects(inputA, inputB)
}
</script>

<template>
  <VExample>
    <template #left>
      {{ inputA }} - {{ inputB }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Intersects
      </VPButton>
    </template>
  </VExample>
</template>
