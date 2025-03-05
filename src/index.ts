import './main.css'
import type { App } from 'vue'
import * as components from './components'

// Export the install function as a named export instead of default
export const install = (app: App) => {
  // Registering each component globally
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

// Export all components individually
export * from './components'
