import { render } from '@testing-library/react'

import { Tag } from './Tag'

describe('Atoms / Tag', () => {
  it('should match snapshot for the Tag component', () => {
    const component = render(<Tag />)
    expect(component).toMatchSnapshot()
  })
})
