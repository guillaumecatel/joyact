import { render } from '@testing-library/react'

import { Text } from './Text'

describe('Atoms / Text', () => {
  it('should match snapshot for the Text component', () => {
    const component = render(<Text />)
    expect(component).toMatchSnapshot()
  })
})
