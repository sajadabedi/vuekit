<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { PhHighlighter, PhTextAa, PhTextT } from '@phosphor-icons/vue';

defineOptions({
  name: 'TypographySystem'
})
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-accent font-semibold mb-4">Font Families</h2>
      <div class="space-y-4">
        <p class="font-sans text-base">Sans (InterVariable) - The quick brown fox jumps over the lazy dog.</p>
        <p class="font-mono text-base">Mono - The quick brown fox jumps over the lazy dog.</p>
      </div>
    </section>
    <section>
      <h2 class="text-accent font-semibold mb-4"><PhTextAa class="inline" size="16" weight="bold" /> Heading</h2>
      <div class="space-y-4">
        <code class="font-mono text-xs opacity-50">text-heading-lg</code>
        <h1 class="text-heading-lg">The quick brown fox jumps over the lazy dog.</h1>
        <code class="font-mono text-xs opacity-50">text-heading-xl</code>
        <h1 class="text-heading-xl">The quick brown fox jumps over the lazy dog.</h1>
         <code class="font-mono text-xs opacity-50">text-heading-2xl</code>
        <h1 class="text-heading-2xl">The quick brown fox jumps over the lazy dog.</h1>
      </div>
    </section>


    <section>
      <h2 class="text-accent font-semibold mb-4"><PhTextT class="inline" weight="bold" size="16" /> Text</h2>
      <div class="space-y-4">
        <code class="font-mono text-xs opacity-50">text-base</code>
        <p class="text-base">The quick brown fox jumps over the lazy dog.</p>
        <code class="font-mono text-xs opacity-50">text-action</code>
        <p class="text-action">The quick brown fox jumps over the lazy dog.</p>
        <code class="font-mono text-xs opacity-50">text-base-bold</code>
        <p class="text-base-bold">The quick brown fox jumps over the lazy dog.</p>
        <code class="font-mono text-xs opacity-50">text-sm</code>
        <p class="text-sm">The quick brown fox jumps over the lazy dog.</p>
        <code class="font-mono text-xs opacity-50">text-sm-bold</code>
        <p class="text-sm-bold">The quick brown fox jumps over the lazy dog.</p>
        <code class="font-mono text-xs opacity-50">text-mono</code>
        <p class="text-mono font-mono">The quick brown fox jumps over the lazy dog.</p>
      </div>
    </section>

    <section>
      <h2 class="text-sm text-accent font-semibold mb-4"><PhHighlighter class="inline" size="16" weight="bold" /> Text Styles</h2>
      <div class="space-y-4">
        <code class="font-mono text-xs opacity-50">text-base-underline</code>
        <p class="text-underline">Regular (440) - The quick brown fox jumps over the lazy dog.</p>
        <code class="font-mono text-xs opacity-50">text-base-underline-dash</code>
        <p class="text-underline-dash">Medium (530) - The quick brown fox jumps over the lazy dog.</p>
        <code class="text-uppercase">text-base-underline-dash</code>
        <p class="uppercase text-xs tracking-wider">Semibold (660) - The quick brown fox jumps over the lazy dog.</p>
      </div>
    </section>
  </div>
</template>
