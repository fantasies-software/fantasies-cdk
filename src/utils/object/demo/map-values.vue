<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { mapValues } from '../map-values'

const obj = ref({ a: 1, b: 2 })
const result = ref<any>(null)

function doMap() {
  result.value = mapValues(obj.value, value => value * 2)
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
        Map Values
      </VPButton>
    </template>
  </VExample>
</template>
