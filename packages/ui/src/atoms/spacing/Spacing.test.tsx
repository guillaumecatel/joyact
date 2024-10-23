import { render } from '@testing-library/react'

import { Spacing } from './Spacing'

describe('Atoms / Spacing', () => {
  it('should match snapshot for the Spacing component', () => {
    const component = render(<Spacing />)
    expect(component).toMatchSnapshot()
  })
})
