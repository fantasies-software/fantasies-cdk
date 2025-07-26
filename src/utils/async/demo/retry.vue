<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { retry } from '../retry'

const retrying = ref(false)
const retryCount = ref(0)
const retryResult = ref<string | null>(null)

async function unreliableTask() {
  retryCount.value++
  if (retryCount.value < 3) {
    throw new Error('fail')
  }
  return 'success!'
}

async function handleRetryDemo() {
  retrying.value = true
  retryCount.value = 0
  retryResult.value = null
  try {
    const res = await retry({ times: 5, delay: 500 }, unreliableTask)
    retryResult.value = res as string
  }
  catch (e: any) {
    retryResult.value = e?.message || String(e)
  }
  retrying.value = false
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Click the button to demo retry (fail twice, succeed the third time)</div>
    </template>
    <template #right>
      <div style="margin-top: 24px;">
        <div>Retry count: {{ retryCount }}</div>
        <div v-if="retryResult !== null">
          Result: {{ retryResult }}
        </div>
      </div>
    </template>
    <template #button>
      <VPButton :disabled="retrying" @click="handleRetryDemo">
        Retry Demo
      </VPButton>
    </template>
  </VExample>
</template>
