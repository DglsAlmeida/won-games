import * as Styled from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <Styled.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Styled.Wrapper>
)

export default Button
