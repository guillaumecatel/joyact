import type { Meta, StoryObj } from '@storybook/react'

import { colors } from '@joyact/tailwind-config'

import { ServiceCard, ServiceCardProps } from './ServiceCard'

const mock: ServiceCardProps[] = [
  {
    title: 'Brand Strategy',
    description: `It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.`,
    listItems: [
      { id: 0, label: 'Research & Insights' },
      { id: 1, label: 'Unique Ways' },
      { id: 2, label: 'Purpose, Mission, Vision' },
      { id: 4, label: 'Value Proposition' },
      { id: 5, label: 'Personality Traits' },
      { id: 6, label: 'Verbal Identity' },
      { id: 7, label: 'Naming' },
    ],
    backgroundColor: 'purple',
    textColor: 'black',
  },
  {
    title: 'Visual Identity',
    description: `
    Visual identity is the unique visual language of your brand,
    creating memorable impressions and emotional connections with your audience.
    `,
    listItems: [
      { id: 0, label: 'Logotype, Typography & Colour' },
      { id: 1, label: 'Illustrations & 3D' },
      { id: 2, label: 'Photography Art Direction' },
      { id: 4, label: 'Brand Book & Guidelines' },
      { id: 5, label: 'Animations' },
      { id: 6, label: 'Video Production' },
      { id: 7, label: 'Product Design' },
    ],
    backgroundColor: 'white',
    textColor: 'black',
  },
  {
    title: 'Website',
    description: `
    Our website design services blend innovation and creativity to deliver user-centric solutions
    that elevate your brand and engage your audience.
    `,
    listItems: [
      { id: 0, label: 'UX Design' },
      { id: 1, label: 'User Testing' },
      { id: 2, label: 'Product Prototype' },
      { id: 4, label: 'Mobile UI' },
      { id: 5, label: 'Sotware UI design' },
      { id: 6, label: 'Web app design' },
      { id: 7, label: 'Interaction design' },
    ],
    backgroundColor: 'yellow',
    textColor: 'black',
  },
  {
    title: 'Product',
    description: `
    Our product design services focus on creating intuitive and aesthetically pleasing
    products that resonate with your audience and stand out in the market.
    `,
    listItems: [
      { id: 0, label: 'UX Design' },
      { id: 1, label: 'User Testing' },
      { id: 2, label: 'Product Prototype' },
      { id: 4, label: 'Mobile UI' },
      { id: 5, label: 'Sotware UI design' },
      { id: 6, label: 'Web app design' },
      { id: 7, label: 'Interaction design' },
    ],
    backgroundColor: 'black',
    textColor: 'white',
  },
]

const meta = {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...mock[0],
  },
  argTypes: {
    textColor: {
      control: 'select',
      options: Object.keys(colors),
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(colors),
    },
  },
} satisfies Meta<typeof ServiceCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <ServiceCard {...args} />
    )
  },
}

export const Stack: Story = {
  render: () => {
    return (
      <div className="mt-3xl">
        {mock.map(props => (
          <ServiceCard {...props} key={props.title} />
        ))}
      </div>
    )
  },
}
