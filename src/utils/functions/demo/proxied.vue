<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { proxied } from '../proxied'

const handler = (key: string) => `Hello, ${key}!`
const proxyObj = proxied(handler)
const input = ref('world')
const output = ref('')

function execute() {
  output.value = proxyObj[input.value]
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Input key: <input v-model="input"></div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Proxied Query
      </VPButton>
    </template>
  </VExample>
</template>
