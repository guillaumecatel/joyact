import { type Config } from 'tailwindcss'

import { fontSize, spacing, colors, fontFamily, fontWeight } from './configs'
import { utopia } from './plugins'

export default {
  theme: {
    colors: colors,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    spacing: spacing,
    maxWidth: {
      text: 'var(--ja-text-max-width)',
      heading: 'var(--ja-heading-max-width)',
    },
    // extend: {
    //   spacing: spacing,
    //   maxWidth: {
    //     text: 'var(--ja-text-max-width)',
    //     heading: 'var(--ja-heading-max-width)',
    //   },
    // },
  },
  plugins: [
    utopia,
    // require('tailwindcss-logical'),
    // require('@tailwindcss/typography'),
  ],
} as Partial<Config>

export * from './configs'
