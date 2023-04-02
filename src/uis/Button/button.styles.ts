import styled, { css } from 'styled-components'
import { ButtonUIProps } from './button.interface'
import {
  getButtonBgColor,
  getButtonBgColorHover,
  getButtonPadding,
  getButtonShape,
  getButtonTextColor
} from '@/functions/button'
import { getButtonFontSize } from '../../functions/button'
import { ColorType } from '@/interfaces/base.interface'

export const ButtonTag = styled.button<ButtonUIProps>`
  cursor: pointer;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  font-size: ${({ size }) => size && getButtonFontSize(size)};
  padding: ${({ size }) => size && getButtonPadding(size)};
  border: ${({ theme, variant, btnColor }) =>
    variant === 'outlined' &&
    typeof btnColor === 'string' &&
    `1px solid ${theme.palette[btnColor].main}`};
  border-radius: ${({ shape }) => shape && getButtonShape(shape)};
  background-color: ${({ theme, btnColor, variant }) =>
    btnColor &&
    (variant === 'contained' ||
      variant === 'translucent' ||
      variant === 'outlined') &&
    getButtonBgColor(theme, variant, btnColor)};
  color: ${({ theme, variant, btnColor }) =>
    typeof btnColor === 'string' &&
    variant &&
    getButtonTextColor(theme, variant, btnColor)};

  ${({ theme, textColor }) =>
    textColor &&
    css`
      color: ${textColor(theme)};
    `};

  &:hover {
    background-color: ${({ theme, variant, btnColor, hoverBgColor }) =>
      variant &&
      btnColor &&
      getButtonBgColorHover(
        theme,
        variant,
        btnColor as ColorType,
        hoverBgColor
      )};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme: { palette } }) => palette.grey[300]};
    border: none;
    color: ${({ theme: { palette } }) => palette.grey[500]};
  }
`

export const Loader = styled.span`
  width: calc(1em + 4px);
  height: calc(1em + 4px);
  border-radius: 50%;
  border: 2px solid currentColor;
  animation: spinner-bulqg1 0.8s infinite linear alternate,
    spinner-oaa3wk 1.6s infinite linear;

  @keyframes spinner-bulqg1 {
    0% {
      clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
    }

    12.5% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 0%,
        100% 0%,
        100% 0%
      );
    }

    25% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 100%,
        100% 100%,
        100% 100%
      );
    }

    50% {
      clip-path: polygon(
        50% 50%,
        0 0,
        50% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }

    62.5% {
      clip-path: polygon(
        50% 50%,
        100% 0,
        100% 0%,
        100% 0%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }

    75% {
      clip-path: polygon(
        50% 50%,
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        50% 100%,
        0% 100%
      );
    }

    100% {
      clip-path: polygon(
        50% 50%,
        50% 100%,
        50% 100%,
        50% 100%,
        50% 100%,
        50% 100%,
        0% 100%
      );
    }
  }

  @keyframes spinner-oaa3wk {
    0% {
      transform: scaleY(1) rotate(0deg);
    }

    49.99% {
      transform: scaleY(1) rotate(135deg);
    }

    50% {
      transform: scaleY(-1) rotate(0deg);
    }

    100% {
      transform: scaleY(-1) rotate(-135deg);
    }
  }
`
