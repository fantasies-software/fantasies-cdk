<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { title } from '../title'

const input = 'foo-bar_baz qux'
const output = ref<string>('?')
function execute() {
  output.value = title(input)
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
        Execute title
      </VPButton>
    </template>
  </VExample>
</template>
