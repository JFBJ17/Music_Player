export interface SidebarItemsProps {
  items: Items[]
}

interface Items {
  title: string
  subItems: SubItems[]
}

interface SubItems {
  title: string
  link: string
}
