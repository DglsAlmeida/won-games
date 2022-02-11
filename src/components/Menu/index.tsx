import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as Styled from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Styled.Wrapper>
      <MediaMatch lessThan="medium">
        <Styled.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </Styled.IconWrapper>
      </MediaMatch>

      <Styled.LogoWrapper>
        <Logo hideOnMobile />
      </Styled.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explorer</Styled.MenuLink>

          {!!username && (
            <>
              <Styled.MenuLink href="#">My account</Styled.MenuLink>
              <Styled.MenuLink href="#">Wishlist</Styled.MenuLink>
            </>
          )}
        </Styled.MenuNav>
      </MediaMatch>

      <Styled.MenuGroup>
        <Styled.IconWrapper>
          <SearchIcon aria-label="search" />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </Styled.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </Styled.MenuGroup>

      <Styled.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <Styled.MenuNav>
          <Styled.MenuLink href="#">Home</Styled.MenuLink>
          <Styled.MenuLink href="#">Explorer</Styled.MenuLink>

          {!!username && (
            <>
              <Styled.MenuLink href="#">My account</Styled.MenuLink>
              <Styled.MenuLink href="#">Wishlist</Styled.MenuLink>
            </>
          )}
        </Styled.MenuNav>

        {!username && (
          <Styled.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <Styled.CreateAccount href="#" title="Sign Up">
              Sign Up
            </Styled.CreateAccount>
          </Styled.RegisterBox>
        )}
      </Styled.MenuFull>
    </Styled.Wrapper>
  )
}

export default Menu
