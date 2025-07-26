<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { toInt } from '../to-int'

const input = ref('123.45')
const output = ref<number | null>(null)

function convert() {
  output.value = toInt(input.value)
}
</script>

<template>
  <VExample>
    <template #left>
      input: <input v-model="input" type="text" style="width: 100px;">
    </template>
    <template #right>
      <span v-if="output !== null">{{ output }}</span>
      <span v-else>-</span>
    </template>
    <template #button>
      <VPButton @click="convert">
        To Int
      </VPButton>
    </template>
  </VExample>
</template>
