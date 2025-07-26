<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { tryit } from '../tryit'

const result = ref<string | null>(null)
const error = ref<string | null>(null)
const running = ref(false)

async function handleTryitDemo() {
  result.value = null
  error.value = null
  running.value = true
  const fn = async () => {
    await new Promise(r => setTimeout(r, 500))
    throw new Error('Something went wrong!')
  }
  const [err, res] = await tryit(fn)()
  if (err)
    error.value = err.message || String(err)
  else result.value = String(res)
  running.value = false
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Click the button to run an async function that throws, and see how tryit catches the error.</div>
    </template>
    <template #right>
      <div v-if="running">
        Running...
      </div>
      <div v-else-if="error">
        Error: {{ error }}
      </div>
      <div v-else-if="result">
        Result: {{ result }}
      </div>
      <div v-else>
        Ready
      </div>
    </template>
    <template #button>
      <VPButton :disabled="running" @click="handleTryitDemo">
        Tryit Demo
      </VPButton>
    </template>
  </VExample>
</template>
