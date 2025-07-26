<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { mapKeys } from '../map-keys'

const obj = ref<Record<string, number>>({ a: 1, b: 2 })
const result = ref<Record<string, number> | null>(null)

function doMap() {
  result.value = mapKeys(obj.value, key => `${key}${key}`)
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
      <VPButton @click="doMap">
        Map Keys
      </VPButton>
    </template>
  </VExample>
</template>
