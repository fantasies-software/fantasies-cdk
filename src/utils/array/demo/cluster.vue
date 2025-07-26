<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { cluster } from '../cluster'

const input = [1, 2, 3, 4, 5, 6]
const output = ref<any>(null)
function execute() {
  output.value = cluster(input, 2)
}
</script>

<template>
  <VExample>
    <template #left>
      {{ input }}
    </template>
    <template #right>
      {{ output }}
    </template>
    <template #button>
      <VPButton @click="execute">
        Click to Cluster
      </VPButton>
    </template>
  </VExample>
</template>
