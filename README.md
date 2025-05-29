# Firstbase Design system

Design system at it's core is a tool. it's not meant to be set in stone set of rules. it's provided with set of guideline, best practices, and tools to help you build coherence, accessible, well crafted interface in quick and iterative way.

## Features

- Composible at it's core.
- Accessbile is built-in.
- Extendable and customizable using classes.
- Dark theme ready.

## Principles

This package is built with composability in mind. You can use the components as-is or extend them to create your own components.You can do light weight customizations using classes. or reach for the core API from `Reka-ui` to build your own components.
For e.g. Dialog component has been used to create dialog (modal) as well as Command components.

## Stack

- Vue 3
- TypeScript
- Phosphor Icons
- Tailwind CSS v4
- class-variance-authority
- reka-ui (aka Radix-vue)
- Framer Motion
- VeeValidate
- vueuse
- Zod

## Install

Install Firstbase, Icon set and tailwindcss (Follow tailwindcss docs for setup)

```bash
pnpm i @firstbase/ui@latest @phosphor-icons/vue@latest
pnpm i tailwindcss @tailwindcss/vite prettier-plugin-tailwindcss
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

Add the following to your `main.css` or `app.css`. to make sure you get all the tokens and variable defined in `@firstbase/ui`.

```css
@import './node_modules/@firstbase/ui/dist/assets/style.css';
@import './node_modules/@firstbase/ui/src/main.css';
@import 'tailwindcss' source('./node_modules/@firstbase/ui/src/main.css');
```

Add TailwindCSS prettier plugin in your `.prettierrc`. This will sort your tailwind classes.

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Add Your first component

```vue
import { Button } from '@firstbase/ui'

<template>
  <Button variant="primary">Click me</Button>
</template>
```

## Development

Clone the repository and install dependancy:

```bash
pnpm install
pnpm run dev
```

# How to Contribute
[Learn how to contirbute](wikis/Contributing)

