import { cva } from 'class-variance-authority'

export const variants = cva('', {
  variants: {
    backgroundColor: {
      orange: 'bg-orange',
      yellow: 'bg-yellow',
      pink: 'bg-pink',
      purple: 'bg-purple',
      black: 'bg-black',
      white: 'bg-white',
      transparent: 'bg-transparent',
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
    textColor: 'white',
    backgroundColor: 'black',
  },
})
