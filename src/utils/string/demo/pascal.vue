<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { pascal } from '../pascal'

const input = 'foo-bar_baz qux'
const output = ref<string>('?')
function execute() {
  output.value = pascal(input)
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
        Execute pascal
      </VPButton>
    </template>
  </VExample>
</template>
