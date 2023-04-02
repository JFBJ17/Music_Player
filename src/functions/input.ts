import { DefaultTheme } from 'styled-components'
import { SizeType } from '../interfaces/base.interface'

export const getInputBorderColor = (
  theme: DefaultTheme,
  state?: 'success' | 'danger'
) => {
  if (!state) return theme.palette.grey[400]
  const options = {
    success: theme.palette.success.main,
    danger: theme.palette.error.main
  }
  return options[state]
}

export const getInputShadowColor = (
  theme: DefaultTheme,
  state?: 'success' | 'danger'
) => {
  if (!state) return theme.palette.primary.dark
  const options = {
    success: theme.palette.success.dark,
    danger: theme.palette.error.dark
  }
  return options[state]
}

export const getInputHeight = (size: SizeType) => {
  const options = {
    small: '36px',
    medium: '44px',
    large: '52px'
  }
  return options[size]
}

export const getInputFontSize = (size: SizeType) => {
  const options = {
    small: '14px',
    medium: '16px',
    large: '18px'
  }
  return options[size]
}

export const getInputPadding = (size: SizeType) => {
  const options = {
    small: '8px 16px',
    medium: '10px 18px',
    large: '14px 20px'
  }
  return options[size]
}
