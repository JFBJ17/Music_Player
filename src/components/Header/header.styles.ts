import styled from 'styled-components'

export const UserInfoContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  i {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`
