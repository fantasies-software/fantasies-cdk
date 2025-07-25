<script lang="ts">
export interface VButtonProps {
    type?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (item:any) => void;
}
</script>

<script lang="ts" setup>
withDefaults(
    defineProps<VButtonProps>(),
    {
        type: 'primary',
        size: 'medium',
        disabled: false,
        onClick: (item:any) => { console.log(item) }
    }
)

</script>

<template>
    <button :disabled="disabled" :class="`v-button v-button--${type} v-button--${size}`" @click="onClick">
        <slot></slot>
    </button>
</template>


<style scoped>
.v-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  padding: 0 14px;
  height: 34px;
  font-size: 14px;
  background: var(--vp-c-brand-1);
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
}
.v-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.v-button--secondary {
  background: #fff;
  color: #2563eb;
  border: 1px solid #2563eb;
}
.v-button--tertiary {
  background: transparent;
  color: #2563eb;
  border: 1px dashed #2563eb;
}
.v-button--small {
  height: 26px;
  font-size: 12px;
  padding: 0 8px;
}
.v-button--large {
  height: 42px;
  font-size: 16px;
  padding: 0 20px;
}
.v-button:not(:disabled):hover {
  filter: brightness(1.08);
}
.v-button:not(:disabled):active {
  filter: brightness(0.92);
}
.dark .v-button {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.dark .v-button--secondary {
  background: #222;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}
.dark .v-button--tertiary {
  background: transparent;
  color: #3b82f6;
  border: 1px dashed #3b82f6;
}
</style>