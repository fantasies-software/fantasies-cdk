<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { list } from '../list'

const output = ref<any>(null)
function execute() {
  output.value = list(1, 5)
}
</script>

<template>
  <VExample>
    <template #left>
      list(1, 5)
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to List
      </VPButton>
    </template>
  </VExample>
</template>
