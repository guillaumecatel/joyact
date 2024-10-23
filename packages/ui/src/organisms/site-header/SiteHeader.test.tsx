import { render } from '@testing-library/react'

import { SiteHeader } from './SiteHeader'

describe('Organisms / SiteHeader', () => {
  it('should match snapshot for the SiteHeader component', () => {
    const component = render(<SiteHeader />)
    expect(component).toMatchSnapshot()
  })
})
