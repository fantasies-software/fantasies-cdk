<script setup lang="ts">
// No props for now, can be extended for custom message or icon
</script>

<template>
  <div class="v-empty">
    <slot>
      <svg class="v-empty__icon" width="64" height="41" viewBox="0 0 64 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="36" rx="32" ry="5" fill="#F5F5F7" />
        <rect x="8" y="8" width="48" height="24" rx="4" fill="#F5F5F7" />
        <rect x="16" y="16" width="32" height="8" rx="2" fill="#E5E7EB" />
      </svg>
      <div class="v-empty__text">
        No Data
      </div>
    </slot>
  </div>
</template>

<style scoped>
.v-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  color: #999;
}
.v-empty__icon {
  margin-bottom: 12px;
}
.v-empty__text {
  font-size: 16px;
  color: #999;
}
</style>

<style scoped>
html.dark .v-empty {
  color: #aaa;
}
html.dark .v-empty__text {
  color: #aaa;
}
html.dark .v-empty__icon ellipse,
html.dark .v-empty__icon rect {
  /* Adjust SVG colors for dark mode */
  fill: #23272e;
}
html.dark .v-empty__icon rect[fill='#E5E7EB'] {
  fill: #444950;
}
</style>
