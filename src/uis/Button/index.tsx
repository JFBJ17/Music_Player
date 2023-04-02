import { ButtonUIProps } from './button.interface'
import { ButtonTag, Loader } from './button.styles'

export const Button = ({
  startIcon,
  endIcon,
  variant = 'contained',
  size = 'medium',
  btnColor = 'primary',
  shape = 'rounded',
  ...props
}: ButtonUIProps) => {
  return (
    <ButtonTag
      variant={variant}
      btnColor={btnColor}
      size={size}
      shape={shape}
      {...props}
    >
      {startIcon && <span>{startIcon}</span>}
      {props.children}
      {endIcon && <span>{endIcon}</span>}
      {props.isLoading && <Loader />}
    </ButtonTag>
  )
}
