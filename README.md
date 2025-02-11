# Firstkit

A Vue 3 Design System

## Installation

```bash
npm install @firstkit
```

## Usage

```typescript
import { createApp } from 'vue'
import Firstkit from '@firstkit'
import '@firstkit/dist/style.css'

const app = createApp(App)
app.use(Firstkit)
app.mount('#app')
```

Or use components individually:

```vue
import { Button } from '@firstkit'

export default {
  components: {
    'fk-button': Button
  }
}
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start Storybook:
```bash
npm run storybook
```

3. Build the library:
```bash
npm run build
```

## Documentation
Components are documented in Storybook. Run `npm run storybook` to view the documentation locally.

## Contributing
Please read our contributing guidelines before submitting PRs.
