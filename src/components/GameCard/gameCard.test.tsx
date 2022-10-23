import { screen } from '@testing-library/react'
import GameCard, { GameCardProps } from './index'
import { renderWithTheme } from '../../utils/tests/helpers'

const props: GameCardProps = {
  title: 'Population Zero',
  developer: 'Rockestar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText('Population Zero')).toBeInTheDocument()
    expect(screen.getByAltText('Population Zero')).toBeInTheDocument()
    expect(screen.getByText('Rockestar Games')).toBeInTheDocument()
    expect(screen.getByText('R$ 235,00')).toBeInTheDocument()
  })
})
