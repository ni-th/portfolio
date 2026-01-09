import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'py-2 rounded-full hover:opacity-80 transition-opacity',
  variants: {
    color: {
      primary: 'bg-gray-700/60 cursor-pointer text-black dark:text-white text-white',
      neutral: 'bg-zinc-500 text-black dark:text-white',
    },
    flat: {
      true: 'bg-transparent'
    }
  },
  defaultVariants: {
    color: 'primary',
    active: false
  },
  compoundVariants: [
    {
      color: 'primary',
      class: 'bg-sky-500/10 text-blue-700 dark:text-blue-100'
      
    },
    {
      color: 'neutral',
      class: 'bg-zinc-500/20 text-zinc-700 dark:text-zinc-300'
    }
  ]
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;