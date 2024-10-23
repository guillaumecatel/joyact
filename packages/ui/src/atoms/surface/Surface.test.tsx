import { render } from '@testing-library/react'

import { Surface } from './Surface'

describe('Atoms / Surface', () => {
  it('should match snapshot for the Surface component', () => {
    const component = render(<Surface />)
    expect(component).toMatchSnapshot()
  })
})
