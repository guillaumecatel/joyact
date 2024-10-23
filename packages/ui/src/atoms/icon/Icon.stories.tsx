import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <Icon {...args} />
    )
  },
}
