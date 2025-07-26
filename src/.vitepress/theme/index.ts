import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VExample from './component.ts/VExample.vue'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('VExample', VExample)
  },
} satisfies Theme
