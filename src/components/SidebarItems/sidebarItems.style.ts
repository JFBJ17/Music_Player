import styled from 'styled-components'

export const SidebarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SubItemTitle = styled.b`
  font-size: 22px;
  font-weight: 700;
  line-height: 22.5px;
  color: ${({ theme }) => theme.palette.common.white};
`

export const ItemList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;

  li {
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.common.white};

    a:hover {
      color: ${({ theme }) => theme.palette.primary.main};

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -15px;
        width: 5px;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`
