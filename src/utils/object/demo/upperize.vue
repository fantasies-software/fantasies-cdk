<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { upperize } from '../upperize'

const obj = ref({ foo: 1, bar: 2 })
const result = ref<any>(null)

function doUpperize() {
  result.value = upperize(obj.value)
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
      <VPButton @click="doUpperize">
        Upperize
      </VPButton>
    </template>
  </VExample>
</template>
