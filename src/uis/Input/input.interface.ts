import { SizeType } from '@/interfaces/base.interface'

export interface InputUIProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SizeType
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  state?: 'success' | 'danger'
  fullWidth?: boolean
}
