<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { reduce } from '../reduce'

const input = ref([1, 2, 3, 4])
const output = ref<any>(null)
const loading = ref(false)

async function runReduce() {
  loading.value = true
  output.value = null
  try {
    output.value = await reduce(input.value, async (acc, n) => acc + n, 0)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <VExample>
    <template #left>
      <div> {{ input }}</div>
    </template>
    <template #right>
      <span v-if="loading">Loading...</span>
      <span v-else>{{ output }}</span>
    </template>
    <template #button>
      <VPButton :disabled="loading" @click="runReduce">
        Reduce
      </VPButton>
    </template>
  </VExample>
</template>
