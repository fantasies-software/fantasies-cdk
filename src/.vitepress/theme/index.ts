import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VButton from './component.ts/VButton.vue'
import VCodeBox from './component.ts/VCodeBox.vue'
import VExample from './component.ts/VExample.vue'

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('VButton', VButton)
    app.component('VCodeBox', VCodeBox)
    app.component('VExample', VExample)
  },
} satisfies Theme
