import { cva, type VariantProps } from 'class-variance-authority';

export { default as Badge } from './Badge.vue';

export const badgeVariants = cva(
  'inline-flex gap-1 items-center rounded-sm px-1.5 h-5 text-xs font-medium max-w-64 truncate w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-ring transition-[color,box-shadow] has-[svg]:pl-1',
  {
    variants: {
      variant: {
        red: 'bg-red-500/15 text-red-700 dark:text-red-400 dark:bg-red-500/20',
        green: 'bg-green-500/15 text-green-700 dark:text-green-400 dark:bg-green-500/20',
        yellow: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 dark:bg-yellow-500/20',
        blue: 'bg-blue-500/15 text-blue-700 dark:text-blue-400 dark:bg-blue-500/20',
        indigo: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 dark:bg-indigo-500/20',
        purple: 'bg-purple-500/15 text-purple-700 dark:text-purple-400 dark:bg-purple-500/20',
        stone: 'bg-stone-500/15 text-stone-700 dark:text-stone-400 dark:bg-stone-500/20',
        pink: 'bg-pink-500/15 text-pink-700 dark:text-pink-400 dark:bg-pink-500/20',
        lime: 'bg-lime-500/15 text-lime-700 dark:text-lime-400 dark:bg-lime-500/20'
      }
    },
    defaultVariants: {
      variant: 'stone'
    }
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
