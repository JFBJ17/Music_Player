import { CgDanger } from 'react-icons/cg'
import { useState, forwardRef } from 'react'
import { InputUIProps } from './input.interface'
import { InputTag, InputWrapper } from './input.styles'
import { BsCheckCircle, BsSearch } from 'react-icons/bs'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputUIProps>(
  (
    { leftIcon, rightIcon, size = 'medium', id, type, onChange, ...props },
    ref
  ) => {
    const [isActive, changeActivity] = useState(false)
    const [isVisible, changeVisibility] = useState(false)

    return (
      <InputWrapper size={size} {...props}>
        {leftIcon && <span>{leftIcon}</span>}
        <InputTag
          type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
          id={id}
          ref={ref}
          onChange={e => {
            changeActivity(e.target.value.length > 0)
            onChange && onChange(e)
          }}
          {...props}
        />
        {rightIcon && <span>{rightIcon}</span>}
        {type === 'password' && isActive && (
          <span
            aria-label='password'
            onClick={() => changeVisibility(!isVisible)}
          >
            {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        )}
        {type === 'search' && (
          <span aria-label='search'>
            <BsSearch />
          </span>
        )}
        {props.state === 'danger' && (
          <span aria-label='danger'>
            <CgDanger />
          </span>
        )}
        {props.state === 'success' && (
          <span aria-label='success'>
            <BsCheckCircle />
          </span>
        )}
      </InputWrapper>
    )
  }
)
