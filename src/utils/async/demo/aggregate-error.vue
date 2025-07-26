<script setup lang="ts">
import { AggregateError } from '../aggregate-error'

const error = new AggregateError([
  new Error('First error'),
  new Error('Second error'),
  new Error('Third error'),
])
</script>

<template>
  <VExample>
    <template #left>
      {{ error.stack }}
    </template>
    <template #right>
      <pre>{{ error.errors[0] }}</pre>
      <pre>{{ error.errors[1] }}</pre>
      <pre>{{ error.errors[2] }}</pre>
    </template>
  </VExample>
</template>
