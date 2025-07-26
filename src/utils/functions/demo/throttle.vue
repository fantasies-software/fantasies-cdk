<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { throttle } from '../throttle'

const count = ref(0)
const output = ref(0)
const throttled = throttle({ interval: 1000 }, (x: number) => {
  output.value = x
})

function trigger() {
  count.value++
  throttled(count.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Click count: {{ count }}</div>
    </template>
    <template #right>
      <div>Throttled output: {{ output }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="trigger">
        Throttle Trigger
      </VPButton>
    </template>
  </VExample>
</template>
