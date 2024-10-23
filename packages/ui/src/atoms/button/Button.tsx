import React from 'react'

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <div {...rest}>
      <h1>Button Component</h1>
      {children}
    </div>
  )
}
