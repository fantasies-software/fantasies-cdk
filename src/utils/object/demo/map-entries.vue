<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { mapEntries } from '../map-entries'

const obj = ref({ a: 1, b: 2 })
const result = ref<any>(null)

function doMap() {
  result.value = mapEntries(obj.value, (key, value) => [key.toUpperCase(), value * 2])
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
        Map Entries
      </VPButton>
    </template>
  </VExample>
</template>
