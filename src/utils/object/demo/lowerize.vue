<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { lowerize } from '../lowerize'

const obj = ref({ Foo: 1, Bar: 2 })
const result = ref<any>(null)

function doLowerize() {
  result.value = lowerize(obj.value)
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
      <VPButton @click="doLowerize">
        Lowerize
      </VPButton>
    </template>
  </VExample>
</template>
