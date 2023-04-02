import { DefaultTheme } from 'styled-components'
import { ColorType, SizeType } from '../interfaces/base.interface'
import {
  ButtonShapeType,
  ButtonVariantType
} from '@/uis/Button/button.interface'

export const getButtonFontSize = (size: SizeType) => {
  const options = {
    small: '14px',
    medium: '16px',
    large: '18px'
  }
  return options[size]
}

export const getButtonPadding = (size: SizeType) => {
  const options = {
    small: '8px 20px',
    medium: '10px 24px',
    large: '14px 32px'
  }
  return options[size]
}

export const getButtonShape = (shape: ButtonShapeType) => {
  const options = {
    pill: '40px',
    rounded: '8px',
    square: '0'
  }
  return options[shape]
}

export const getButtonBgColor = (
  theme: DefaultTheme,
  variant: 'contained' | 'translucent' | 'outlined',
  btnColor: ColorType | ((theme: Pick<DefaultTheme, 'palette'>) => string)
) => {
  if (typeof btnColor !== 'string') return btnColor(theme)

  const options = {
    outlined: 'transparent',
    contained: theme.palette[btnColor].main,
    translucent: `${theme.palette[btnColor].main}26`
  }
  return options[variant]
}

export const getButtonTextColor = (
  theme: DefaultTheme,
  variant: ButtonVariantType,
  btnColor: ColorType
) => {
  const options = {
    contained: theme.palette[btnColor].contrastText,
    translucent: theme.palette[btnColor].main,
    text: theme.palette[btnColor].main,
    outlined: theme.palette[btnColor].main
  }
  return options[variant]
}

export const getButtonBgColorHover = (
  theme: DefaultTheme,
  variant: ButtonVariantType,
  btnColor: ColorType,
  hoverBgColor?: (theme: Pick<DefaultTheme, 'palette'>) => string
) => {
  if (hoverBgColor) return hoverBgColor(theme)
  const options = {
    contained: theme.palette[btnColor].dark,
    translucent: `${theme.palette[btnColor].dark}33`,
    text: `${theme.palette[btnColor].dark}26`,
    outlined: `${theme.palette[btnColor].dark}26`
  }

  return options[variant]
}
