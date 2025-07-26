<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { partob } from '../partob'

const fn = (args: { a: number, b: number, c: number }) => args.a + args.b + args.c
const partialObj = partob(fn, { a: 1 })
const input = ref({ b: 2, c: 3 })
const output = ref<number | null>(null)

function execute() {
  output.value = partialObj(input.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>fn({ a: 1, ...x })</div>
      <div>x: <input v-model.number="input.b" type="number" placeholder="b"> <input v-model.number="input.c" type="number" placeholder="c"></div>
    </template>
    <template #right>
      <div>Output: {{ output }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Partob Calculate
      </VPButton>
    </template>
  </VExample>
</template>
