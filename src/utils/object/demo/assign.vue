<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { assign } from '../assign'

const obj1 = ref<Record<string, number>>({ a: 1, b: 2 })
const obj2 = ref<Record<string, number>>({ b: 3, c: 4 })
const result = ref<any>(null)

function doAssign() {
  result.value = assign(obj1.value, obj2.value)
}
</script>

<template>
  <VExample>
    <template #left>
      obj1: {{ obj1 }}<br>obj2: {{ obj2 }}
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doAssign">
        Assign
      </VPButton>
    </template>
  </VExample>
</template>
