import React from 'react'

export interface SpacingProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const Spacing = ({ children, ...rest }: SpacingProps) => {
  return (
    <div {...rest}>
      <h1>Spacing Component</h1>
      {children}
    </div>
  )
}
