<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { construct } from '../construct'

const obj = ref({ a: 1, b: 2 })
const result = ref<any>(null)

function doConstruct() {
  result.value = construct(obj.value)
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
      <VPButton @click="doConstruct">
        Construct
      </VPButton>
    </template>
  </VExample>
</template>
