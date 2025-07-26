<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { capitalize } from '../capitalize'

const input = 'foo'
const output = ref<string>('?')
function execute() {
  output.value = capitalize(input)
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
        Execute capitalize
      </VPButton>
    </template>
  </VExample>
</template>
