import type { Meta, StoryObj } from '@storybook/react'

import { fontSize } from '@joyact/tailwind-config'

import { Text } from './Text'

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: 'Act like u drop like it\'s hot ',
    fontSize: 'body',
    fontFamily: 'sans',
    textColor: 'black',
    fontWeight: 'normal',
  },
  argTypes: {
    fontSize: {
      control: 'select',
      options: [

      ],
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
    fontWeight: {
      control: 'select',
      options: [
        'black',
        'extrabold',
        'bold',
        'medium',
        'semibold',
        'normal',
        'light',
        'extralight',
        'thin',
      ],
    },
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    return (
      <Text {...args} />
    )
  },
}

export const Scaling: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-3">
        {meta.argTypes.fontSize.options.map(option => (
          <div className="flex flex-row items-center gap-3 border-b border-black/20 p-4 leading-none" key={option}>
            <div className="w-16"><Text fontSize="small">{option}</Text></div>
            <div className="flex-1 overflow-x-auto overflow-y-hidden text-nowrap">
              <Text {...args} fontSize={option} />
            </div>
          </div>
        ))}
      </div>
    )
  },
}

export const Example: Story = {
  render: (args) => {
    return (
      <div className="mx-auto flex max-w-5xl flex-col py-xl">
        <Text fontSize="display-1" fontWeight="bold" className="pb-md tracking-tighter">
          Hello
          my
          {' '}
          <br />
          friend
        </Text>
        <div className="flex flex-col gap-lg text-pretty">
          <Text fontFamily="serif" fontSize="heading-4" className="max-w-prose  text-pretty">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Etiam</strong>
            {' '}
            cursus convallis elementum. In eu erat a dui pulvinar mattis. Duis eget viverra neque. Donec feugiat turpis sit amet erat aliquet venenatis et a tortor. Pellentesque volutpat enim quis ornare feugiat. Duis ullamcorper interdum odio vitae tempus. Maecenas in iaculis lacus.
          </Text>
          <Text fontFamily="sans" fontSize="heading-2" fontWeight="semibold" className="pl-md text-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus convallis elementum. In eu erat a dui pulvinar mattis."</Text>

          <div className=" columns-2 gap-lg text-pretty">
            <Text fontFamily="serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus convallis elementum. In eu erat a dui pulvinar mattis. Duis eget viverra neque. Donec feugiat turpis sit amet erat aliquet venenatis et a tortor. Pellentesque volutpat enim quis ornare feugiat. Duis ullamcorper interdum odio vitae tempus. Maecenas in iaculis lacus.</Text>
            <Text fontFamily="serif" className="pt-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus convallis elementum. In eu erat a dui pulvinar mattis. Duis eget viverra neque. Donec feugiat turpis sit amet erat aliquet venenatis et a tortor. Pellentesque volutpat enim quis ornare feugiat. Duis ullamcorper interdum odio vitae tempus. Maecenas in iaculis lacus.</Text>
            <Text fontFamily="serif" className="pt-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              cursus convallis elementum. In eu erat a dui pulvinar mattis. Duis eget viverra neque. Donec feugiat turpis sit amet erat aliquet venenatis et a tortor. Pellentesque volutpat enim quis ornare feugiat.
              {' '}
              <Text fontSize="small" className="pt-sm">Duis ullamcorper interdum odio vitae tempus. Maecenas in iaculis lacus.</Text>
            </Text>
          </div>
        </div>
      </div>
    )
  },
}
