import { VariantProps } from 'class-variance-authority'
import React from 'react'

import { variants } from './Tag.variants'
import { cn } from '../../utils'
import { Text } from '../text/Text'

export interface TagProps
  extends React.ComponentPropsWithoutRef<'span'>,
  VariantProps<typeof variants> {}

export const Tag = ({
  children,
  className,
  fontFamily,
  fontSize,
  textColor = 'black',
  ...rest
}: TagProps) => {
  return (
    <Text fontSize={fontSize} asChild>
      <span className={cn(className, variants({ fontFamily, fontSize, textColor }))} {...rest}>
        {children}
      </span>
    </Text>
  )
}
