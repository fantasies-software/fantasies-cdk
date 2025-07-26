<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { invert } from '../invert'

const obj = ref({ a: 1, b: 2 })
const result = ref<any>(null)

function doInvert() {
  result.value = invert(obj.value)
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
      <VPButton @click="doInvert">
        Invert
      </VPButton>
    </template>
  </VExample>
</template>
