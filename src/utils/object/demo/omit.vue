<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { omit } from '../omit'

const obj = ref({ foo: 1, bar: 2, baz: 3 })
const key = ref<'foo' | 'bar' | 'baz'>('bar')
const result = ref<any>(null)

function doOmit() {
  result.value = omit(obj.value, [key.value])
}
</script>

<template>
  <VExample>
    <template #left>
      obj: {{ obj }}<br>key: <select v-model="key">
        <option value="foo">
          foo
        </option>
        <option value="bar">
          bar
        </option>
        <option value="baz">
          baz
        </option>
      </select>
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doOmit">
        Omit
      </VPButton>
    </template>
  </VExample>
</template>
