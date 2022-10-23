import Button from 'components/Button'
import { Favorite } from 'styled-icons/material'
import * as S from './styles'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ developer, img, price, title }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button">
        <Favorite arial-label="Add to wish list" />
      </S.FavButton>

      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small"></Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
