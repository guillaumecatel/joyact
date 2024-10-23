import type { Meta, StoryObj } from '@storybook/react'

import { Exportable } from './Exportable'

const meta = {
  title: 'Exportable',
  component: Exportable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    format: { width: 438, height: 620 },
    showGrid: false,
    gridColumns: 6,
    gridGutter: 24,
  },
  argTypes: {
    format: {
      control: 'select',
      options: ['A6', 'A5', 'A4', 'A3', 'A2', 'A1', 'A0'],
      mapping: {
        A6: { width: 109, height: 310 },
        A5: { width: 310, height: 219 },
        A4: { width: 438, height: 620 },
        A3: { width: 620, height: 877 },
        A2: { width: 877, height: 1240 },
        A1: { width: 1240, height: 1754 },
        A0: { width: 1754, height: 2480 },
      },
    },
  },
} satisfies Meta<typeof Exportable>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}
