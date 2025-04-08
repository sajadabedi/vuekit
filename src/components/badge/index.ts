import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const colors = {
  red: 'bg-red-muted text-red-contrast',
  green: 'bg-green-muted text-green-contrast',
  yellow: 'bg-yellow-muted text-yellow-contrast',
  blue: 'bg-blue-muted text-blue-contrast',
  indigo: 'bg-indigo-muted text-indigo-contrast',
  purple: 'bg-purple-muted text-purple-contrast',
  stone: 'bg-stone-muted text-stone-contrast',
  pink: 'bg-pink-muted text-pink-contrast',
  lime: 'bg-lime-muted text-lime-contrast'
} as const

export type Color = keyof typeof colors

export const badgeVariants = cva(
  'inline-flex gap-0.5 items-center rounded-sm px-1.5 h-5 text-xs font-medium max-w-64 truncate w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      color: colors
    },
    defaultVariants: {
      color: 'stone'
    }
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
