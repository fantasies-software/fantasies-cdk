<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { crush } from '../crush'

const obj = ref({ a: 1, b: { c: 2 } })
const result = ref<any>(null)

function doCrush() {
  result.value = crush(obj.value)
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
      <VPButton @click="doCrush">
        Crush
      </VPButton>
    </template>
  </VExample>
</template>
