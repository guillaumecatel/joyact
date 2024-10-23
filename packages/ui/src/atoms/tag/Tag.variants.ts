import { cva } from 'class-variance-authority'

export const variants = cva('inline-flex rounded-full border text-center', {
  variants: {
    fontSize: {
      'heading-4': 'px-xs py-2xs text-heading-4',
      'body': 'px-2xs py-3xs text-body',
      'small': 'px-3xs text-small',
      'display-1': 'text-display-1',
      'display-2': 'text-display-2',
      'heading-1': 'text-heading-1',
      'heading-2': 'text-heading-2',
      'heading-3': 'text-heading-3',
      'very-small': 'text-very-small',
    },
    fontFamily: {
      serif: 'font-serif',
      sans: 'font-sans',
    },
    textColor: {
      orange: 'border-orange text-orange',
      yellow: 'border-yellow text-yellow',
      pink: 'border-pink text-pink',
      black: 'border-black text-black',
      white: 'border-white text-white',
    },
  },
  defaultVariants: {
    fontSize: 'body',
    fontFamily: 'sans',
    textColor: 'black',
  },
})
