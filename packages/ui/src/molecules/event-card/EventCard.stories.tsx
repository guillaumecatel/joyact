import type { Meta, StoryObj } from '@storybook/react'

import { EventCard } from './EventCard'

const meta = {
  title: 'Molecules/EventCard',
  component: EventCard,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    eventName: 'hi',
    title: 'Toto',
    description: 'Lorem ipsum',
    listItems: [],
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'orange',
        'yellow',
        'pink',
        'black',
        'white',
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
} satisfies Meta<typeof EventCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <div className="absolute inset-0 flex flex-col justify-center align-middle">
        <EventCard className="max-w-[480px]" {...args} />
      </div>
    )
  },
}
