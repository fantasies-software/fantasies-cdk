<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { all } from '../all'

const input = ref([
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
])
const output = ref<any>(null)
const loading = ref(false)

async function runAll() {
  loading.value = true
  output.value = null
  try {
    output.value = await all(input.value.map(fn => fn()))
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Promise Array: [1,2,3]</div>
    </template>
    <template #right>
      <span v-if="loading">Loading...</span>
      <span v-else>{{ output }}</span>
    </template>
    <template #button>
      <VPButton :disabled="loading" @click="runAll">
        Run all()
      </VPButton>
    </template>
  </VExample>
</template>
