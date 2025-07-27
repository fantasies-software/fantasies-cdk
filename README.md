# @fantasies/cdk

[![Coverage Status](https://coveralls.io/repos/github/fantasies-software/fantasies-cdk/badge.svg?branch=test)](https://coveralls.io/github/fantasies-software/fantasies-cdk?branch=test)

> Efficient, modern UI component behavior & utility library for TypeScript, Vue 3, and Vite.

---

## ✨ Features

- Rich array, object, string, async, and functional utilities
- Built-in Vue 3 components (Button, Alert) and composables
- Modern TypeScript type support
- Vite & Vue 3 ready, easy integration
- 100% unit test coverage

## 📦 Installation

```bash
npm install @fantasies/cdk
# or
pnpm add @fantasies/cdk
# or
yarn add @fantasies/cdk
```

## 🛠️ Usage

### Utilities

```ts
import { groupBy, sum, unique } from '@fantasies/cdk'

const arr = [
  { type: 'A', value: 1 },
  { type: 'B', value: 2 },
  { type: 'A', value: 3 },
]
const grouped = groupBy(arr, 'type')
// => { A: [...], B: [...] }

const total = sum([1, 2, 3]) // => 6
const uniq = unique([1, 2, 2, 3]) // => [1, 2, 3]
```

### Vue 3 Components

```vue
<script setup lang="ts">
import { Alert, Button } from '@fantasies/cdk'
</script>

<template>
  <Alert type="success">
    Success!
  </Alert>
  <Button>Button</Button>
</template>
```

### Composables

```ts
import { useDemo } from '@fantasies/cdk'

const state = useDemo()
```

## 📚 Directory Structure

```
src/
  components/   # Vue 3 components
  composables/  # Composables
  utils/        # Utility functions
    array/      # Array utilities
    async/      # Async utilities
    functions/  # Functional utilities
    number/     # Number utilities
    object/     # Object utilities
    string/     # String utilities
    type/       # Type utilities
```

## 🧪 Test

```bash
pnpm test
# or npm run test
```

## 📝 Contributing

PRs and issues are welcome! Please read [CONTRIBUTING](./CONTRIBUTING.md) if available.

## 📄 License

MIT © fantasies-software
