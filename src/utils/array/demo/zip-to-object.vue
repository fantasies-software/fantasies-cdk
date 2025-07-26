<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { zipToObject } from '../zip-to-object'

const keys = ['a', 'b']
const values = [1, 2]
const output = ref<any>(null)
function execute() {
  output.value = zipToObject(keys, values)
}
</script>

<template>
  <VExample>
    <template #left>
      {{ keys }} - {{ values }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to ZipToObject
      </VPButton>
    </template>
  </VExample>
</template>
