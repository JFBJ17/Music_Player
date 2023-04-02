import Image from 'next/image'

import FoxbelLogo from '@/assets/images/foxbel-music.png'
import { SidebarItems } from '../SidebarItems'
import { SidebarContainer } from './sibar.styles'
import { SidebarProps } from './sidebar.interface'
import { Grid } from '@/uis/Grid'

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const libraries = [
    {
      title: 'Mi Librería',
      subItems: [
        {
          title: 'Recientes',
          link: 'https://www.youtube.com/'
        },
        {
          title: 'Artistas',
          link: 'https://www.facebook.com/'
        },
        {
          title: 'Albums',
          link: 'https://www.instagram.com/'
        },
        {
          title: 'Canciones',
          link: 'https://www.twitter.com/'
        },
        {
          title: 'Estaciones',
          link: 'https://www.linkedin.com/'
        }
      ]
    }
  ]
  const playlists = [
    {
      title: 'Playlist',
      subItems: [
        {
          title: 'Metal',
          link: 'https://www.youtube.com/'
        },
        {
          title: 'Para bailar',
          link: 'https://www.facebook.com/'
        },
        {
          title: 'Rock 90s',
          link: 'https://www.instagram.com/'
        },
        {
          title: 'Baladas',
          link: 'https://www.twitter.com/'
        }
      ]
    }
  ]

  return (
    <SidebarContainer isOpen={isOpen} onClick={e => e.stopPropagation()}>
      <Grid container flexDirection='column' rowSpacing={4}>
        <Grid $display='flex' justifyContent='center' alignItems='center'>
          <Image src={FoxbelLogo} alt='foxbel-logo' height={59} width={250} />
        </Grid>
        <Grid>
          <SidebarItems items={libraries} />
        </Grid>
        <Grid>
          <SidebarItems items={playlists} />
        </Grid>
      </Grid>
    </SidebarContainer>
  )
}
