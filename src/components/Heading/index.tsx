import * as Styled from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
  lineColor?: LineColors
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  size = 'medium',
  lineBottom = false,
  lineColor = 'primary'
}: HeadingProps) => (
  <Styled.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </Styled.Wrapper>
)

export default Heading
