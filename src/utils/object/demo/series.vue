<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue'
import { series } from '../series'

const arr = ref([
  { key: 'a', value: 1 },
  { key: 'b', value: 2 },
  { key: 'c', value: 3 },
  { key: 'd', value: 4 },
])

// Use key as unique identifier
const s = series(arr.value, item => item.key)

const minResult = ref<any>(null)
const maxResult = ref<any>(null)
const firstResult = ref<any>(null)
const lastResult = ref<any>(null)
const nextResult = ref<any>(null)
const previousResult = ref<any>(null)
const spinResult = ref<any>(null)

function doMin() {
  minResult.value = s.min(arr.value[1], arr.value[2]) // min(b, c)
}
function doMax() {
  maxResult.value = s.max(arr.value[1], arr.value[2]) // max(b, c)
}
function doFirst() {
  firstResult.value = s.first()
}
function doLast() {
  lastResult.value = s.last()
}
function doNext() {
  nextResult.value = s.next(arr.value[2]) // next(c)
}
function doPrevious() {
  previousResult.value = s.previous(arr.value[2]) // previous(c)
}
function doSpin() {
  spinResult.value = s.spin(arr.value[0], 2) // spin(a, 2)
}
</script>

<template>
  <VExample>
    <template #left>
      <div>
        <strong>Input array:</strong>
        <pre>{{ JSON.stringify(arr, null, 2) }}</pre>
      </div>
    </template>
    <template #right>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div>
          <VPButton size="small" @click="doMin">
            min(b, c)
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ minResult ? JSON.stringify(minResult) : '-' }}</code></span>
        </div>
        <div>
          <VPButton size="small" @click="doMax">
            max(b, c)
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ maxResult ? JSON.stringify(maxResult) : '-' }}</code></span>
        </div>
        <div>
          <VPButton size="small" @click="doFirst">
            first()
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ firstResult ? JSON.stringify(firstResult) : '-' }}</code></span>
        </div>
        <div>
          <VPButton size="small" @click="doLast">
            last()
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ lastResult ? JSON.stringify(lastResult) : '-' }}</code></span>
        </div>
        <div>
          <VPButton size="small" @click="doNext">
            next(c)
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ nextResult ? JSON.stringify(nextResult) : '-' }}</code></span>
        </div>
        <div>
          <VPButton size="small" @click="doPrevious">
            previous(c)
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ previousResult ? JSON.stringify(previousResult) : '-' }}</code></span>
        </div>
        <div>
          <VPButton size="small" @click="doSpin">
            spin(a, 2)
          </VPButton>
          <span style="margin-left: 8px;">Result: <code>{{ spinResult ? JSON.stringify(spinResult) : '-' }}</code></span>
        </div>
      </div>
    </template>
  </VExample>
</template>
