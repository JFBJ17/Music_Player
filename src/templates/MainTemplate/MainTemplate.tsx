import { useState } from 'react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { MainTemplateProps } from './mainTemplate.interface'
import { MusicController } from '@/components/MusicController'
import {
  ControllersContainer,
  MainContentContainer,
  MainTemplateContainer,
  SideMenuContainer
} from './mainTemplate.styles'

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <MainTemplateContainer>
      <SideMenuContainer isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Sidebar isOpen={isOpen} />
      </SideMenuContainer>
      <MainContentContainer>
        <Header />
        <main style={{ marginTop: '40px' }}>{children}</main>
      </MainContentContainer>
      <ControllersContainer>
        <MusicController />
      </ControllersContainer>
    </MainTemplateContainer>
  )
}
