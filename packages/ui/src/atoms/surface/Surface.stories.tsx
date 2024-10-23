import type { Meta, StoryObj } from '@storybook/react'

import { Surface } from './Surface'

const meta = {
  title: 'Atoms/Surface',
  component: Surface,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Surface>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <Surface {...args} />
    )
  },
}
