<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { defer } from '../defer'

const output = ref<string>('Ready')
const loading = ref(false)

async function runDefer() {
  loading.value = true
  output.value = 'Step 1: Waiting...'
  await defer(async (register) => {
    register(() => {
      output.value = 'Step 3: Cleanup (defer callback)!'
      loading.value = false
    })
    await new Promise(resolve => setTimeout(resolve, 1000))
    output.value = 'Step 2: Main task done.'
    await new Promise(resolve => setTimeout(resolve, 500))
  })
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Click button to defer execution</div>
    </template>
    <template #right>
      <span>{{ output }}</span>
    </template>
    <template #button>
      <VPButton :disabled="loading" @click="runDefer">
        Defer
      </VPButton>
    </template>
  </VExample>
</template>
