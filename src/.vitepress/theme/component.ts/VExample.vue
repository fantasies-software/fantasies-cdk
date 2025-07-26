<script setup lang="ts">
</script>

<template>
  <div class="v-example">
    <div class="v-example__left">
      <slot name="left" />
    </div>
    <div class="v-example__right">
      <slot name="right" />
      <div class="v-example__button">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-example {
  display: flex;
  width: 100%;
  min-height: 120px;
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
}
.v-example__left,
.v-example__right {
  flex: 1 1 0;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
.v-example__left {
  border-right: 1px solid #eee;
}
.v-example__button {
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 2;
}
.dark .v-example {
  background: #18181c;
  border-color: #333;
}
.dark .v-example__left {
  border-right: 1px solid #333;
}
</style>
