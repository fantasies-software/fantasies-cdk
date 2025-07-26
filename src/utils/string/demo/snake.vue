<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { snake } from '../snake'

const input = 'fooBarBaz'
const output = ref<string>('?')
function execute() {
  output.value = snake(input)
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
        Execute snake
      </VPButton>
    </template>
  </VExample>
</template>
