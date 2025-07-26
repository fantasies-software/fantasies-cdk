<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { callable } from '../callable'

const obj = { value: 42, text: 'hello' }
const output = ref()
const fn = (self: typeof obj) => (x: number) => self.value + x
const execute = () => output.value = callable(obj, fn)(1)
</script>

<template>
  <VExample>
    <template #left>
      <div>Object: {{ obj }}</div>
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute()">
        execute
      </VPButton>
    </template>
  </VExample>
</template>
