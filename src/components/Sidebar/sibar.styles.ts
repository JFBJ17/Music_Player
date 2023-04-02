import styled from 'styled-components'

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  position: relative;
  z-index: 10000;
  width: 230px;
  height: 100%;
  padding: 20px 15px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.4s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    transform: translateX(0);
  }
`
