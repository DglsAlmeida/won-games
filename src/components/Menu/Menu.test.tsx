import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Menu from './index'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  // it('should render the open/close menu', () => {
  //   renderWithTheme(<Menu />)

  //   const fullMenuElement = screen.getByRole('navigation', { hidden: true })

  //   expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  //   expect(fullMenuElement).toHaveStyle({ opacity: 0 })

  //   fireEvent.click(screen.getByLabelText(/open menu/i))
  //   expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
  //   expect(fullMenuElement).toHaveStyle({ opacity: 1 })

  //   fireEvent.click(screen.getByLabelText(/close menu/i))
  //   expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  //   expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  // })

  // it('should show appear links when has a username', () => {
  //   renderWithTheme(<Menu username="doug" />)

  //   const myAccountLinkElement = screen.getByText(/my account/i)
  //   const wishlistLinkElement = screen.getByText(/wishlist/i)
  //   const signinButtonElement = screen.queryByText(/log in now/i)
  //   const signupButtonElement = screen.queryByText(/Sign Up/i)

  //   expect(myAccountLinkElement).toBeInTheDocument()
  //   expect(wishlistLinkElement).toBeInTheDocument()
  //   expect(signinButtonElement).not.toBeInTheDocument()
  //   expect(signupButtonElement).not.toBeInTheDocument()
  // })

  // it('should desappear links when does not have a username', () => {
  //   renderWithTheme(<Menu />)

  //   const signinButtonElement = screen.queryByText(/log in now/i)
  //   const signupButtonElement = screen.queryByText(/Sign Up/i)
  //   const myAccountLinkElement = screen.queryByText(/my account/i)
  //   const wishlistLinkElement = screen.queryByText(/wishlist/i)

  //   expect(signinButtonElement).toBeInTheDocument()
  //   expect(signupButtonElement).toBeInTheDocument()
  //   expect(myAccountLinkElement).not.toBeInTheDocument()
  //   expect(wishlistLinkElement).not.toBeInTheDocument()
  // })
})
