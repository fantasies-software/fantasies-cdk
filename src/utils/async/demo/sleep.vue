<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { sleep } from '../sleep'

const waiting = ref(false)
const done = ref(false)

async function doSleep() {
  waiting.value = true
  done.value = false
  await sleep(1000)
  waiting.value = false
  done.value = true
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Click the button to wait for 1 second</div>
    </template>
    <template #right>
      <div v-if="waiting">
        Sleeping...
      </div>
      <div v-else-if="done">
        Done!
      </div>
      <div v-else>
        Ready
      </div>
    </template>
    <template #button>
      <VPButton :disabled="waiting" @click="doSleep">
        Sleep
      </VPButton>
    </template>
  </VExample>
</template>
