import styled from 'styled-components'
import { InputUIProps } from './input.interface'
import {
  getInputBorderColor,
  getInputFontSize,
  getInputHeight,
  getInputPadding,
  getInputShadowColor
} from '@/functions/input'

export const InputWrapper = styled.div<InputUIProps>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  border-radius: 100px; // 8px
  border: 1px solid ${({ theme, state }) => getInputBorderColor(theme, state)};
  height: ${({ size }) => size && getInputHeight(size)};
  padding: ${({ size }) => size && getInputPadding(size)};
  background-color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ size }) => size && getInputFontSize(size)};
  color: ${({ theme }) => theme.palette.grey[800]};

  &:has(input:focus) {
    box-shadow: 0px 0px 3px
      ${({ theme, state }) => getInputShadowColor(theme, state)};
    border: ${({ theme, state }) =>
      !state && `1px solid ${theme.palette.primary.dark}`};
  }

  &:has(input:disabled) {
    background-color: ${({ theme }) => theme.palette.grey[200]};
    color: ${({ theme }) => theme.palette.grey[600]};
    border: 1px solid ${({ theme }) => theme.palette.grey[400]};
    cursor: not-allowed;

    span {
      color: inherit;
      cursor: not-allowed;
    }
  }

  span {
    color: ${({ theme }) => theme.palette.grey[500]};
  }

  [aria-label='danger'] {
    color: ${({ theme }) => theme.palette.error.main};
  }
  [aria-label='success'] {
    color: ${({ theme }) => theme.palette.success.main};
  }

  [aria-label='password'] {
    cursor: pointer;
  }
`

export const InputTag = styled.input<InputUIProps>`
  width: 100%;
  height: 100%;
  background-color: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.grey[500]};
  }
`
