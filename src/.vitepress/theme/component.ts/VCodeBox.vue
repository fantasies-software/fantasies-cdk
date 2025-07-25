
<template>
  <div class="v-code-box">
    <div class="v-code-box__tabs">
      <button
        :class="['v-code-box__tab', { active: activeTab === 'preview' }]"
        @click="activeTab = 'preview'"
      >预览</button>
      <button
        :class="['v-code-box__tab', { active: activeTab === 'code' }]"
        @click="activeTab = 'code'"
      >源码</button>
    </div>
    <div class="v-code-box__content">
      <div v-if="activeTab === 'preview'" class="v-code-box__preview">
        <slot />
      </div>
      <div v-else class="v-code-box__code">
        <div class="v-code-box__copy-btn">
          <button @click="copyCode" :disabled="copied">
            <span v-if="!copied">复制</span>
            <span v-else>已复制</span>
          </button>
        </div>
          <pre>
            <code>{{ code }}</code>
          </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ code?: string }>()
const activeTab = ref<'preview' | 'code'>('preview')
const code = ref(props.code || '')
const copied = ref(false)


function copyCode() {
  if (!code.value) return
  navigator.clipboard.writeText(code.value).then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 1200)
  })
}
  
</script>

<style scoped>
.v-code-box {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.03);
}

html.dark .v-code-box {
  background: #18181c;
  border-color: #33343a;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.25);
}
.v-code-box__tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
}
html.dark .v-code-box__tabs {
  border-bottom: 1px solid #33343a;
}
.v-code-box__tab {
  padding: 8px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #888;
  outline: none;
  transition: color 0.2s;
}
html.dark .v-code-box__tab {
  color: #aaa;
}
 .v-code-box__tab.active {
  color: var(--vp-c-brand-1);
  border-bottom: 2px solid var(--vp-c-brand-1);
  background: rgba(var(--vp-c-brand-1-rgb), 0.08);
}
html.dark .v-code-box__tab.active {
  color: var(--vp-c-brand-1);
  border-bottom: 2px solid var(--vp-c-brand-1);
  background: #23272e;
}
.v-code-box__content {
  padding: 16px;
  position: relative;
}
html.dark .v-code-box__content {
  background: transparent;
}
.v-code-box__preview {
  min-height: 40px;
}
.v-code-box__code pre {
  background: #f6f8fa;
  border-radius: 4px;
  padding: 12px;
  font-size: 13px;
  overflow-x: auto;
  margin: 0;
}
html.dark .v-code-box__code pre {
  background: #23272e;
  color: #e6e6e6;
}

.v-code-box__copy-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 2;
}
.v-code-box__copy-btn button {
  background: #f6f8fa;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 13px;
  color: #888;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.v-code-box__copy-btn button:disabled {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: rgba(var(--vp-c-brand-1-rgb, 66,184,131), 0.08);
  cursor: default;
}
html.dark .v-code-box__copy-btn button {
  background: #23272e;
  border: 1px solid #33343a;
  color: #aaa;
}
html.dark .v-code-box__copy-btn button:disabled {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: rgba(var(--vp-c-brand-1-rgb, 66,184,131), 0.12);
}
</style>
