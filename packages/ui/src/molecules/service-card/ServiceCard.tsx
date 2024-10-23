import React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { Text } from '../../atoms/text/Text'

import { variants } from './ServiceCard.variants'
import { cn } from '../../utils'

export interface ServiceCardProps
  extends React.ComponentPropsWithoutRef<'div'>,
  VariantProps<typeof variants> {
  title: string
  description: string
  listItems: { id: number, label: string }[]
}

export const ServiceCard = ({
  className,
  textColor = 'black',
  backgroundColor,
  title,
  description,
  listItems,
  ...rest
}: ServiceCardProps) => {
  return (
    <div className={cn('flex flex-row flex-wrap gap-xl p-md', className, variants({ backgroundColor }))} {...rest}>
      <div className="flex flex-1 flex-col gap-xl">
        <Text textColor={textColor} fontSize="display-2" lineHeight="none" fontFamily="serif" fontWeight="normal" maxWidth="column" asChild>
          <h2>{title}</h2>
        </Text>
        <div className="flex flex-col items-baseline gap-xl md:flex-row">
          <Text textColor={textColor} fontSize="heading-4" fontFamily="sans" maxWidth="column" textWrap="pretty">
            {description}
          </Text>
          <ul className="flex flex-col gap-3xs">
            {listItems.map(({ id, label }) => (
              <Text textColor={textColor} fontSize="small" textWrap="no-wrap" asChild key={id}>
                <li>{label}</li>
              </Text>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="relative aspect-video size-full rounded-lg bg-white/20">
      </div> */}
    </div>
  )
}
