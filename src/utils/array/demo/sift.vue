<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { sift } from '../sift'

const input = [0, 1, false, 2, '', 3, null]
const output = ref<any>(null)
function execute() {
  output.value = sift(input)
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
        Click to Sift
      </VPButton>
    </template>
  </VExample>
</template>
