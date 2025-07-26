<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { get } from '../get'

const obj = ref({ foo: { bar: 42 } })
const path = ref('foo.bar')
const result = ref<any>(null)

function doGet() {
  result.value = get(obj.value, path.value, 'default')
}
</script>

<template>
  <VExample>
    <template #left>
      obj: {{ obj }}<br>path: <input v-model="path" type="text" style="width: 100px;">
    </template>
    <template #right>
      {{ result }}
    </template>
    <template #button>
      <VPButton @click="doGet">
        Get
      </VPButton>
    </template>
  </VExample>
</template>
