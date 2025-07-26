<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { zipToArray } from '../zip-to-array'

const inputA = ['a', 'b']
const inputB = [1, 2]
const output = ref<any>(null)
function execute() {
  output.value = zipToArray(inputA, inputB)
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
        Click to ZipToArray
      </VPButton>
    </template>
  </VExample>
</template>
