import * as Styled from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  size = 'medium',
  lineBottom = false
}: HeadingProps) => (
  <Styled.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
  >
    {children}
  </Styled.Wrapper>
)

export default Heading
