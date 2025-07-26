<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { objectify } from '../../array/objectify'

interface Item { id: string, value: number }
const arr = ref<Item[]>([
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
])
const result = ref<any>(null)

function doObjectify() {
  result.value = objectify(arr.value, (x: Item) => x.id, (x: Item) => x.value)
}
</script>

<template>
  <VExample>
    <template #left>
      arr: {{ arr }}
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doObjectify">
        Objectify
      </VPButton>
    </template>
  </VExample>
</template>
