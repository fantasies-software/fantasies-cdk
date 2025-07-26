<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { draw } from '../draw'

const items = ref(['🍎', '🍌', '🍊', '🍇', '🍉'])
const result = ref<string | null>(null)

function execute() {
  result.value = draw(items.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Items: {{ items }}</div>
    </template>
    <template #right>
      <div>Draw result: {{ result }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Draw
      </VPButton>
    </template>
  </VExample>
</template>
