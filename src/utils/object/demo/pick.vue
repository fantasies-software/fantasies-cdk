<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { pick } from '../pick'

const obj = ref({ foo: 1, bar: 2, baz: 3 })
const key = ref<'foo' | 'bar' | 'baz'>('bar')
const result = ref<any>(null)

function doPick() {
  result.value = pick(obj.value, [key.value])
}
</script>

<template>
  <VExample>
    <template #left>
      obj: {{ obj }}<br>key: <input v-model="key" type="text" style="width: 100px;">
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doPick">
        Pick
      </VPButton>
    </template>
  </VExample>
</template>
