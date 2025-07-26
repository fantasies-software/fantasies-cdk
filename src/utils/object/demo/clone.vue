<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { clone } from '../clone'

const obj = ref({ a: 1, b: { c: 2 } })
const result = ref<any>(null)

function doClone() {
  result.value = clone(obj.value)
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
      <VPButton @click="doClone">
        Clone
      </VPButton>
    </template>
  </VExample>
</template>
