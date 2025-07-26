<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { camel } from '../camel'

const input = 'foo-bar_baz qux'
const output = ref<string>('?')
function execute() {
  output.value = camel(input)
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
        Execute camel
      </VPButton>
    </template>
  </VExample>
</template>
