import Link from 'next/link'

import {
  ItemList,
  SidebarItemsContainer,
  SubItemTitle
} from './sidebarItems.style'
import { SidebarItemsProps } from './sidebarItems.interface'

export const SidebarItems: React.FC<SidebarItemsProps> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <SidebarItemsContainer key={item.title.toLowerCase()}>
          <SubItemTitle>{item.title}</SubItemTitle>
          <ItemList>
            {item.subItems.map(item => (
              <li key={item.title.toLowerCase()}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ItemList>
        </SidebarItemsContainer>
      ))}
    </>
  )
}
