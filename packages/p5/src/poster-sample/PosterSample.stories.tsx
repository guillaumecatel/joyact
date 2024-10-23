import type { Meta, StoryObj } from '@storybook/react'

import { PosterSample } from './PosterSample'

const meta = {
  title: 'PosterSample',
  component: PosterSample,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    width: 826,
    height: 1169,
    showGrid: false,
    gridColumns: 6,
    gridGutter: 24,
  },
} satisfies Meta<typeof PosterSample>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}
