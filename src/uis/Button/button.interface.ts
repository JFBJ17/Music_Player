import { ThemeType } from '@/interfaces/theme.interface'
import { ColorType, SizeType } from '@/interfaces/base.interface'

export interface ButtonUIProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType
  fullWidth?: boolean
  endIcon?: React.ReactNode
  startIcon?: React.ReactNode
  variant?: ButtonVariantType
  shape?: ButtonShapeType
  btnColor?: ColorType | ((theme: Pick<ThemeType, 'palette'>) => string)
  textColor?: (theme: Pick<ThemeType, 'palette'>) => string
  hoverBgColor?: (theme: Pick<ThemeType, 'palette'>) => string
  isLoading?: boolean
}

export type ButtonShapeType = 'square' | 'rounded' | 'pill'
export type ButtonVariantType =
  | 'text'
  | 'contained'
  | 'outlined'
  | 'translucent'
