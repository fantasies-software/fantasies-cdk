<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { keys } from '../keys'

const obj = ref({ a: 1, b: 2 })
const result = ref<any>(null)

function doKeys() {
  result.value = keys(obj.value)
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
      <VPButton @click="doKeys">
        Keys
      </VPButton>
    </template>
  </VExample>
</template>
