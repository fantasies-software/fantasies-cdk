import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VEmpty from './component.ts/VEmpty.vue'
import VExample from './component.ts/VExample.vue'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('VExample', VExample)
    app.component('VEmpty', VEmpty)
  },
} satisfies Theme
