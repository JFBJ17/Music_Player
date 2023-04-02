import { forwardRef } from 'react'
import { GridWrapper } from './grid.styles'
import { GridUIProps } from './grid.interface'

// eslint-disable-next-line react/display-name
export const Grid = forwardRef<HTMLDivElement, GridUIProps>(
  ({ columns = 12, ...props }, ref) => {
    return (
      <GridWrapper columns={columns} ref={ref} {...props}>
        {props.children}
      </GridWrapper>
    )
  }
)
