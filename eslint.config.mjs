import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  rules: {
    'ts/no-unsafe-function-type': 'off',
  },
  ignores: [
    'node_modules',
    'dist',
    'cache',
  ],
})
