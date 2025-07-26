<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { parallel } from '../parallel'

const limit = ref(2)
const input = ref([1, 2, 3, 4, 5])
const output = ref<any>(null)
const loading = ref(false)

function asyncDouble(n: number) {
  return new Promise<number>(resolve => setTimeout(() => resolve(n * 2), 200))
}

async function execute() {
  loading.value = true
  try {
    output.value = await parallel(limit.value, input.value, asyncDouble)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <VExample>
    <template #left>
      limit: <input v-model.number="limit" type="number" min="1" max="10" style="width: 50px;">
      <br>input: {{ input }}
    </template>
    <template #right>
      <span v-if="loading">Loading...</span>
      <span v-else>{{ output }}</span>
    </template>
    <template #button>
      <VPButton :disabled="loading" @click="execute">
        Run Parallel
      </VPButton>
    </template>
  </VExample>
</template>
