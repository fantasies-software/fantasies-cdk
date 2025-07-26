<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { set } from '../set'

const obj = ref({ foo: { bar: 1 } })
const path = ref('foo.bar')
const value = ref(42)
const result = ref<any>(null)

function doSet() {
  result.value = set(obj.value, path.value, value.value)
}
</script>

<template>
  <VExample>
    <template #left>
      obj: {{ obj }}<br>path: <input v-model="path" type="text" style="width: 100px;">
      <br>value: <input v-model.number="value" type="number" style="width: 60px;">
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doSet">
        Set
      </VPButton>
    </template>
  </VExample>
</template>
