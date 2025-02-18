import 'main.css'
import type { App } from 'vue'
import * as components from './components'

export default {
  install: (app: App) => {
    // Registering each component globally
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })
  },
}

// Export all components individually
export * from './components'
