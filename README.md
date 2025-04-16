# Firstbase Design system

Design system at it's core is a tool. it's not meant to be set in stone set of rules. it's provided with set of guideline, best practices, and tools to help you build coherence, accessible, well crafted interface in quick and iterative way.

## Features

- Composible by default.
- Accessbile is built-in.
- Extendable and customizable using classes.
- Dark theme ready.

## Principles

This package is built with composability in mind. You can use the components as-is or extend them to create your own components.You can do light weight customizations using classes. or reach for the core API from `Reka-ui` to build your own components.

## Stack

- [x] Vue 3
- [x] TypeScript
- [x] Phosphor Icons
- [x] Tailwind CSS v4
- [x] Modern CSS features
- [x] class-variance-authority
- [x] reka-ui
- [x] Framer Motion
- [x] VeeValidate
- [x] Zod

## Install

Install Firstbase, Icon set and tailwindcss

```bash
pnpm i @firstbase/ui@latest @phosphor-icons/vue@latest
pnpm i tailwindcss @tailwindcss/vite
```

## Usage

Add Inter font to the your app head. and note that we are using `InterVariable` font.

```html
<head>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</head>
```

Add this snippet to a top level layout in your app to set the default icon setting in the product. [Read more](https://github.com/PhosphorIcons/Phosphor-Vue)

```vue
<script lang="ts" setup>
import { provide } from 'vue';

provide('color', 'currentColor');
provide('size', 16);
provide('weight', 'bold');
</script>
```

Add the following to your `main.css` or `app.css`. This will be your Tailwindcss config.

```css
@import './node_modules/@firstbase/ui/dist/assets/style.css';
@import './node_modules/@firstbase/ui/src/main.css';
@import 'tailwindcss' source('./node_modules/@firstbase/ui/src/main.css');
```

Add Your first component styles to your app

```vue
import { Button } from '@firstbase/ui'

<template>
  <Button variant="primary">Click me</Button>
</template>
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start development server:
   ```bash
   pnpm storybook
   ```
4. Setup your editor:
   Add the following to your `settings.json` to make sure the Tailwind CSS extension can parse the class names when using `cva`:

```json
"tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    "[\"'`]([^\"'`]*).*?[\"'`]",
    "cx\\(((?:[^()]|\\([^()]*\\))*)\\)",
    "(?:'|\"|`)([^']*)(?:'|\"|`)",
  ],
```

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a merge request

## Publishing

The package is automatically published to pnpm when a new tag is pushed to the repository.

To release a new version:

```bash
pnpm version patch  # for bug fixes
pnpm version minor  # for new features
pnpm version major  # for breaking changes
git push origin main --tags
git push
```
