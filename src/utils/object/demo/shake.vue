<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { shake } from '../shake'

const input = {
  a: 1,
  b: undefined,
  c: null,
  d: 2,
  e: '',
  f: false,
  g: 0,
  h: Number.NaN,
  i: 'fantasy',
  j: [],
  k: {},
}
const output = ref<any>(null)

function handleShake() {
  output.value = shake(input, x => x === 2)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>
        <strong>Input object:</strong>
        <pre>{{ JSON.stringify(input, null, 2) }}</pre>
      </div>
    </template>
    <template #right>
      <div>
        <pre>{{ JSON.stringify(output, null, 2) }}</pre>
      </div>
    </template>
    <template #button>
      <VPButton @click="handleShake">
        Shake Object
      </VPButton>
    </template>
  </VExample>
</template>
