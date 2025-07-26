<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { trim } from '../trim'

const input = '  foo  '
const output = ref<string>('?')
function execute() {
  output.value = trim(input)
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
        Execute trim
      </VPButton>
    </template>
  </VExample>
</template>
