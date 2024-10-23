import type { Meta, StoryObj } from '@storybook/react'

import { spacing } from '@joyact/tailwind-config'

import { Spacing } from './Spacing'

const meta = {
  title: 'Atoms/Spacing',
  component: Spacing,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spacing>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col" style={{ gap: 42 }}>
        {Object.values(spacing).map(([k, v]) => (
          <div className="flex flex-row items-center" style={{ gap: 42 }} key={k}>
            <div className="text-small">
              {v}
              rem
            </div>
          </div>
        ))}
      </div>
    )
  },
}
