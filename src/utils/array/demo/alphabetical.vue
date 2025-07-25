<script lang="ts" setup>
const data = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
})); 
</script>

<template>
  <VExample>
    <template #left>{{ data }}</template>
    <template #right></template>
    <template #button>
      <VButton>Click Me</VButton>
    </template>
  </VExample>
</template>
