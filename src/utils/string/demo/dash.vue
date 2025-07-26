<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { dash } from '../dash'

const input = 'fooBarBaz'
const output = ref<string>('?')
function execute() {
  output.value = dash(input)
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
        Execute dash
      </VPButton>
    </template>
  </VExample>
</template>
