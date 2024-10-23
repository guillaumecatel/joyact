import React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { variants } from './Text.variants'

export interface TextProps
  extends React.ComponentPropsWithoutRef<'p'>,
  VariantProps<typeof variants> {
  asChild?: boolean
}

export const Text = ({
  asChild,
  children,
  className,
  fontSize,
  fontFamily,
  textColor,
  fontWeight,
  textWrap,
  maxWidth,
  lineHeight,
  ...rest
}: TextProps) => {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      className={
        variants({
          fontSize,
          fontFamily,
          textColor,
          fontWeight,
          textWrap,
          maxWidth,
          lineHeight,
          className,
        })
      }
      {...rest}
    >
      {children}
    </Comp>
  )
}
