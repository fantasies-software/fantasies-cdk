<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { listify } from '../listify'

const obj = ref({ a: 1, b: 2 })
const result = ref<any>(null)

function doListify() {
  result.value = listify(obj.value, (key, value) => ({ key, value }))
}
</script>

<template>
  <VExample>
    <template #left>
      obj: {{ obj }}
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doListify">
        Listify
      </VPButton>
    </template>
  </VExample>
</template>
