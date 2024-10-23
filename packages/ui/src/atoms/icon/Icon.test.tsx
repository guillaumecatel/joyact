import { render } from '@testing-library/react'

import { Icon } from './Icon'

describe('Atoms / Icon', () => {
  it('should match snapshot for the Icon component', () => {
    const component = render(<Icon />)
    expect(component).toMatchSnapshot()
  })
})
