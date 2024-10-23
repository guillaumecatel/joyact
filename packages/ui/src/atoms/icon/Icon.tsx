import React from 'react'

export interface IconProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const Icon = ({ children, ...rest }: IconProps) => {
  return (
    <div {...rest}>
      <h1>Icon Component</h1>
      {children}
    </div>
  )
}
