<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { map } from '../map'

const input = ref([1, 2, 3])
const output = ref<any>(null)
const loading = ref(false)

async function runMap() {
  loading.value = true
  output.value = null
  try {
    output.value = await map(input.value, async n => n * 2)
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
      <VPButton :disabled="loading" @click="runMap">
        Map
      </VPButton>
    </template>
  </VExample>
</template>
