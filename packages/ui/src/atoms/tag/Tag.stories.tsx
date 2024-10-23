import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'
import { fontSize } from '@joyact/tailwind-config'

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Hello world',
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: Object.keys(fontSize),
    },
    fontFamily: {
      control: 'select',
      options: [
        'serif',
        'sans',
      ],
    },
    textColor: {
      control: 'select',
      options: [
        'orange',
        'yellow',
        'pink',
        'black',
        'white',
      ],
    },
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <Tag {...args} />
    )
  },
}
