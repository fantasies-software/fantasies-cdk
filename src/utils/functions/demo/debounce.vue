<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { debounce } from '../debounce'

const count = ref(0)
const output = ref(0)
const debounced = debounce({ delay: 500 }, (x: number) => {
  output.value = x
})

function trigger() {
  count.value++
  debounced(count.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Click count: {{ count }}</div>
    </template>
    <template #right>
      <div>Debounced output: {{ output }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="trigger">
        Debounce Trigger
      </VPButton>
    </template>
  </VExample>
</template>
