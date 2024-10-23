import type { Preview } from '@storybook/react'

import { colors } from '@joyact/tailwind-config'
import { capitalizeFirstLetter } from '@joyact/utils'

import 'tailwindcss/tailwind.css'

import '@joyact/fonts/safiro'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: Object.entries(colors).map(([k, v]) =>
        ({ name: capitalizeFirstLetter(k), value: v })),
      default: 'White',
      grid: {
        cellSize: 5,
        opacity: 0.25,
        cellAmount: 4,
        offsetX: -0.5,
        offsetY: -0.5,
      },
    },
    viewport: {
      viewports: {
        macBookAir: {
          name: 'Macbook Air',
          styles: {
            width: '1280px',
            height: '800px',
            borderRadius: '38px',
            boxShadow: '0 26px 58px 0 rgba(0, 0, 0, 0.22), 0 5px 14px 0 rgba(0, 0, 0, 0.18)',
          },
        },
        iphone16ProMax: {
          name: 'iPhone 16 Pro Max',
          styles: {
            width: '440px',
            height: '956px',
            borderRadius: '62px',
            boxShadow: '0 26px 58px 0 rgba(0, 0, 0, 0.22), 0 5px 14px 0 rgba(0, 0, 0, 0.18)',
          },
        },
      },
    },
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/iu,
        date: /Date$/iu,
      },
    },
  },
}

export default preview
