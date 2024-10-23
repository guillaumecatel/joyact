import { cva } from 'class-variance-authority'

export const variants = cva('', {
  variants: {
    lineHeight: {
      none: 'leading-none',
    },
    maxWidth: {
      prose: 'max-w-prose',
      column: 'max-w-column',
    },
    textWrap: {
      'wrap': 'text-wrap',
      'no-wrap': 'text-nowrap',
      'balance': 'text-balance',
      'pretty': 'text-pretty',
    },
    fontSize: {
      'display-1': 'text-display-1 tracking-tighter',
      'display-2': 'text-display-2 tracking-tighter',
      'heading-1': 'text-heading-1',
      'heading-2': 'text-heading-2',
      'heading-3': 'text-heading-3',
      'heading-4': 'text-heading-4',
      'body': 'text-body',
      'small': 'text-small',
      'very-small': 'text-very-small',
    },
    fontFamily: {
      serif: 'font-serif',
      sans: 'font-sans',
    },
    fontWeight: {
      black: 'font-black',
      extrabold: 'font-extrabold',
      bold: 'font-bold',
      medium: 'font-medium',
      semibold: 'font-semibold',
      normal: 'font-normal',
      light: 'font-light',
      extralight: 'font-extralight',
      thin: 'font-thin',

    },
    textColor: {
      orange: 'text-orange',
      yellow: 'text-yellow',
      pink: 'text-pink',
      black: 'text-black',
      white: 'text-white',
    },
  },
  defaultVariants: {
    fontSize: 'body',
    fontFamily: 'sans',
    textColor: 'black',
    fontWeight: 'normal',
    textWrap: 'wrap',
    maxWidth: 'prose',
  },
})
