<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { toggle } from '../toggle'

const input = [1, 2, 3]
const item = 2
const output = ref<any>(null)
function execute() {
  output.value = toggle(input, item)
}
</script>

<template>
  <VExample>
    <template #left>
      {{ input }} - toggle {{ item }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Toggle
      </VPButton>
    </template>
  </VExample>
</template>
