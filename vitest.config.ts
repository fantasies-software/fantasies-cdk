import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': r('./src'),
    },
    dedupe: [
      'vue',
      '@vue/runtime-core',
    ],
  },
  test: {
    reporters: 'default',
    env: {
      TZ: 'UTC-8',
    },
    coverage: {
      provider: 'istanbul',
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/**/demo/**',
      ],
    },
    clearMocks: true,
    projects: [
      {
        resolve: { alias: { vue: 'vue/dist/vue.esm-bundler.js' } },
        test: {
          include: ['src/**/*.browser.{test,spec}.ts'],
          name: 'browser',
          setupFiles: ['vitest-browser-vue'],
          browser: {
            enabled: true,
            provider: 'playwright',
            headless: true,
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
      {
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: [
            'src/**/*.{test,spec}.ts',
          ],
          server: {
            deps: { inline: ['vue', 'msw', 'vitest-package-exports'] },
          },
        },
      },
    ],
  },
})
