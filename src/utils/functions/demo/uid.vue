<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { uid } from '../uid'

const length = ref(8)
const specials = ref('')
const result = ref('')

function execute() {
  result.value = uid(length.value, specials.value)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>Length: <input v-model.number="length" type="number"></div>
      <div>Special characters: <input v-model="specials"></div>
    </template>
    <template #right>
      <div>UID: {{ result }}</div>
    </template>
    <template #button>
      <VPButton class="ml-2" @click="execute">
        Generate UID
      </VPButton>
    </template>
  </VExample>
</template>
