import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

const projectRootDir = resolve(__dirname)

function split(moduleId, meta) {
  const info = meta.getModuleInfo(moduleId)
  if (!info?.isIncluded) {
    return null
  }

  // Only process files in the src directory
  if (!moduleId.includes('/src/')) {
    return null
  }

  // Extract the path relative to src
  const srcIndex = moduleId.indexOf('/src/')
  const relativePath = moduleId.substring(srcIndex + 5) // +5 to skip '/src/'

  // Remove file extension
  const pathWithoutExt = relativePath.replace(/\.[^/.]+$/, '')

  // Debug log
  console.log('Processing:', pathWithoutExt)

  // If it's index.ts in src root, put it in the main chunk
  if (pathWithoutExt === 'index') {
    return null // This will go to the main index chunk
  }

  // For all other files, use the full path structure
  return pathWithoutExt
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**'],
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
    dedupe: ['vue', '@vue/runtime-core'],
  },
  build: {
    minify: false,
    target: 'esnext',
    sourcemap: true,
    lib: {
      name: 'fantasies-cdk',
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ],
      output: [
        {
          format: 'es',
          manualChunks: split,
          exports: 'named',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
        },
        {
          format: 'cjs',
          manualChunks: split,
          exports: 'named',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name].cjs',
        },
        {
          format: 'module',
          manualChunks: split,
          exports: 'named',
          entryFileNames: '[name].mjs',
          chunkFileNames: '[name].mjs',
        },
      ],
    },
  },
})
