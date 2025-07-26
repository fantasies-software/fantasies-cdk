<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue';
import { boil } from '../boil'

const input = [1, 5, 3, 9, 2]
const output = ref<number | null>(null)
const execute = ()=>{
    output.value = boil(input, (a, b) => (a > b ? a : b))
}
</script>

<template>
    <VExample>
        <template #left>
            {{ input }}
        </template>
        <template #right>
            {{ output }}
        </template>
        <template #button>
            <VPButton @click="execute">
                Click to Boil
            </VPButton>
        </template>
    </VExample>
</template>