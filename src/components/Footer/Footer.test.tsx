import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Footer from './index'

describe('<Footer />', () => {
  it('should render 4 columns', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText(/contact us/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    expect(screen.getByText(/links/i)).toBeInTheDocument()
    expect(screen.getByText(/location/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
