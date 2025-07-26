<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { guard } from '../guard'

const output = ref<string>('')

function mayThrow() {
  if (Math.random() > 0.5)
    throw new Error('Random error!')
  return 'Success!'
}

function runGuard() {
  const result = guard(mayThrow)
  output.value = result === undefined ? 'Error guarded!' : result
}
</script>

<template>
  <VExample>
    <template #left>
      <div>click button to potentially throw error</div>
    </template>
    <template #right>
      <span>{{ output }}</span>
    </template>
    <template #button>
      <VPButton @click="runGuard">
        Guard
      </VPButton>
    </template>
  </VExample>
</template>
