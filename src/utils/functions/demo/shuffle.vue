<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { shuffle } from '../shuffle'

const items = ref([1, 2, 3, 4, 5])
const result = ref<number[]>([])

function execute() {
  result.value = shuffle(items.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Original array: {{ items }}</div>
    </template>
    <template #right>
      <div>Shuffled: {{ result }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Shuffle
      </VPButton>
    </template>
  </VExample>
</template>
