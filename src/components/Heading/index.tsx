import * as Styled from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <Styled.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </Styled.Wrapper>
)

export default Heading
