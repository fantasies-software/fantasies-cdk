<script lang="ts" setup>
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue';
import { alphabetical } from '../alphabetical'

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

const output = ref()

const sortedData = () => {
  output.value = alphabetical(data, i => i.name,'desc');
};

</script>

<template>
  <VExample>
    <template #left>{{ data }}</template>
    <template #right>{{ output }}</template>
    <template #button>
      <VPButton @click="sortedData">Click</VPButton>
    </template>
  </VExample>
</template>
