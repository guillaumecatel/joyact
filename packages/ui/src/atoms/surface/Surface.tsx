import React from 'react'

export interface SurfaceProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export const Surface = ({ children, ...rest }: SurfaceProps) => {
  return (
    <div {...rest}>
      <h1>Surface Component</h1>
      {children}
    </div>
  )
}
