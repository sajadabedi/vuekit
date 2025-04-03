# Firstbase Design system

A modern UI component library for Vue 3 applications.

## Installation

```bash
pnpm install @firstbase/ui
```

## Usage

1. Add Inter font to the your app head. and note that we are using `InterVariable` font.

```html
<head>
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</head>
```

2. Add Your first component styles to your app

```vue
import { Button } from '@firstbase/ui'

<template>
  <Button>Click me</Button>
</template>
```

## Available Components

[List of components and their usage will be added here]

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
```
