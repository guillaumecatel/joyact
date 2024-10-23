import { type VariantProps } from 'class-variance-authority'
import React from 'react'

import { variants } from './EventCard.variants'
import { cn } from '../../utils'
import { Text } from '../../atoms/text/Text'
import { Tag } from '../../atoms/tag/Tag'

export interface EventCardProps
  extends React.ComponentPropsWithoutRef<'div'>,
  VariantProps<typeof variants> {
  eventName: string
  title: string
  description: string
  listItems: { id: number, label: string }[]
}

export const EventCard = ({
  className,
  textColor = 'black',
  backgroundColor = 'transparent',
  ...rest
}: EventCardProps) => {
  return (
    <div className={cn('flex flex-col gap-md p-md', variants({ backgroundColor }), className)} {...rest}>
      <div className="flex flex-col gap-md">
        <div>
          <Tag fontSize="small" textColor={textColor}>ADE: BPitch</Tag>

        </div>
        <Text fontSize="heading-2" fontWeight="normal" fontFamily="serif" textColor={textColor} maxWidth="column" asChild>
          <h2>
            Ellen Allien presents Vinylism
          </h2>
        </Text>
      </div>
      <div className="flex  flex-col justify-between gap-sm">
        <div className="flex flex-col">
          <Text fontSize="small" textColor={textColor} maxWidth="column" asChild>
            <span>21+</span>
          </Text>
          <Text fontSize="small" textColor={textColor} maxWidth="column" asChild>
            <span>16:00 -22:00</span>
          </Text>
          <Text fontSize="small" textColor={textColor} maxWidth="column" asChild>
            <span>17 October 2024</span>
          </Text>
        </div>
        <div className="flex flex-row gap-2xs">
          <div>
            <Tag textColor={textColor} fontSize="body">Tickets</Tag>
          </div>
          <div>
            <Tag textColor={textColor} fontSize="body">Information</Tag>
          </div>
        </div>
      </div>
    </div>
  )
}
