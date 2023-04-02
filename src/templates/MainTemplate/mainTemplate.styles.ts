import styled from 'styled-components'

export const MainTemplateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100px;
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: auto 1fr;
  }
`

export const SideMenuContainer = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => `${theme.palette.grey[50]}66`};
  position: absolute;
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({ isOpen }) =>
    isOpen ? '0' : '100%'}; // 0 to 100% to hide sidebar curtain
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
  }
`

export const MainContentContainer = styled.div`
  overflow-y: auto;
  padding: 30px 40px;
  background-color: ${({ theme }) => theme.palette.common.white};
`

export const ControllersContainer = styled.div`
  grid-column: 1 / 3;
`
