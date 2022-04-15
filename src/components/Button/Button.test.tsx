import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from './index'

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render with fullWith version', () => {
    renderWithTheme(<Button fullWidth>Won Games</Button>)

    expect(screen.getByRole('button', { name: /Won Games/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Won Games</Button>
    )

    expect(screen.getByText(/won games/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Won Games
      </Button>
    )

    expect(screen.getByRole('link', { name: /won games/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
