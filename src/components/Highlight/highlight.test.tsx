import { screen } from '@testing-library/react'
import Highlight, { HighlightProps } from './index'
import { renderWithTheme } from '../../utils/tests/helpers'
import * as S from './styles'

const props: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLink: '/test',
  backgroundImage: '/img/red-dead-img.jpeg',
  floatImage: '/float-image.png',
  buttonLabel: 'Buy now'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render background img', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float img', () => {
    renderWithTheme(<Highlight {...props} floatImage={props.floatImage} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage={props.floatImage} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage={props.floatImage} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )
  })
})
